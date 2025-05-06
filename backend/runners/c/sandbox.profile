whitelist /tmp
whitelist ${HOME}/tmp

# Read-only system directories
read-only /bin
read-only /lib
read-only /lib64
read-only /usr

# Disable dangerous features
net none
no3d
nodvd
nogroups
nonewprivs
noroot
notv
nou2f
novideo

# No access to sensitive directories
private-dev
private-tmp

# Restrict system calls with seccomp
seccomp
seccomp.drop mount,umount,umount2,ptrace,kexec_load,kexec_file_load,name_to_handle_at,open_by_handle_at,create_module,init_module,finit_module,delete_module,iopl,ioperm,swapon,swapoff,syslog