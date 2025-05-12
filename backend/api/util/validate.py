import re

def validate_job_id(job_id):
    """Validate job ID format."""
    return bool(job_id and isinstance(job_id, str) and 
                re.match(r'^[a-zA-Z0-9\-]+$', job_id))
                
def validate_filename(filename):
    """Validate filename format."""
    return bool(filename and isinstance(filename, str) and 
                re.match(r'^[a-zA-Z0-9_.-]+$', filename))