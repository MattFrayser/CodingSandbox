import os
import time
import requests
from typing import Dict, List, Tuple

# Local Imports
from connect import redis_conn, monitor_queues
from _logger import logger
from config import LANGUAGE_APPS

# Track which apps we've requested to start
starting_apps = {}

class FlyAPIClient:
    def __init__(self):
        self.api_token = os.getenv("FLY_API_TOKEN")
        if not self.api_token:
            raise ValueError("FLY_API_TOKEN is incorrect or missing.")
        
        self.base_url = "https://api.machines.dev/v1"
        self.headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Content-Type": "application/json"
        }
    
    def get_app_status(self, app_name: str) -> Dict:
        """Get app status using REST API"""
        try:
            response = requests.get(
                f"{self.base_url}/apps/{app_name}/machines",
                headers=self.headers,
                timeout=30
            )
            response.raise_for_status()
            machines = response.json()
            
            return {
                "name": app_name,
                "machines": {
                    "nodes": [
                        {
                            "id": machine["id"],
                            "state": machine["state"]
                        } for machine in machines
                    ]
                }
            }
        except requests.RequestException as e:
            logger.error(f"API request failed: {str(e)}")
            return None
    
    def start_machine(self, app_name: str, machine_id: str) -> bool:
        """Start a machine using REST API"""
        try:
            response = requests.post(
                f"{self.base_url}/apps/{app_name}/machines/{machine_id}/start",
                headers=self.headers,
                timeout=30
            )
            response.raise_for_status()
            return True
        except requests.RequestException as e:
            logger.error(f"API request failed: {str(e)}")
            return False
    
    def stop_machine(self, app_name: str, machine_id: str) -> bool:
        """Stop a machine using REST API"""
        try:
            response = requests.post(
                f"{self.base_url}/apps/{app_name}/machines/{machine_id}/stop",
                headers=self.headers,
                timeout=30
            )
            response.raise_for_status()
            return True
        except requests.RequestException as e:
            logger.error(f"API request failed: {str(e)}")
            return False

# Initialize the Fly API client
try:
    fly_client = FlyAPIClient()
except ValueError as e:
    logger.error(str(e))
    exit(1)

def start_runner(app_name: str) -> bool:
    """Start a specific runner app using Fly.io API"""

    current_time = time.time()
    
    # Check if attempt to start app recently
    if app_name in starting_apps:
        last_start_time = starting_apps[app_name]
        if current_time - last_start_time < 30:
            return False
    
    # Mark starting of app
    starting_apps[app_name] = current_time
    
    # Get app status
    logger.info(f"Checking status of {app_name}")
    app_status = fly_client.get_app_status(app_name)
    
    if not app_status:
        logger.error(f"Failed to get status for {app_name}")
        return False
    
    # Extract machine information
    machines = app_status.get("machines", {}).get("nodes", [])
    if not machines:
        logger.error(f"No machines found for {app_name}")
        return False
    
    # Check machine states
    running_machines = []
    stopped_machines = []
    
    for machine in machines:
        if machine["state"] == "started":
            running_machines.append(machine["id"])
        elif machine["state"] == "stopped":
            stopped_machines.append(machine["id"])
    
    if running_machines:
        logger.info(f"App {app_name} already has running machines: {running_machines}")
        return True
    
    # Start a stopped machine if available
    if stopped_machines:
        machine_id = stopped_machines[0]
        logger.info(f"Starting machine {machine_id} for {app_name}")
        
        success = fly_client.start_machine(app_name, machine_id)
        if success:
            logger.info(f"Successfully started machine {machine_id}")
            return True
        else:
            logger.error(f"Failed to start machine {machine_id}")
            return False
    
    logger.warning(f"No stopped machines available for {app_name}")
    return False

def clean_starting_apps():
    """Remove apps from the starting_apps dict if they were started more than 2 minutes ago"""
    current_time = time.time()
    to_remove = []
    
    for app, start_time in starting_apps.items():
        if current_time - start_time > 120:  # 2 minutes
            to_remove.append(app)
    
    for app in to_remove:
        del starting_apps[app]

if __name__ == "__main__":
    logger.info("Orchestrator Starting")
    monitor_queues()