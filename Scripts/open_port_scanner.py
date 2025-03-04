import socket

def scan_ports(target, port_range):
    print(f"Scanning target: {target}")
    print(f"Scanning ports in range: {port_range[0]} - {port_range[1]}")

    for port in range(port_range[0], port_range[1] + 1):
        # Create a socket object
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)

        # Try to connect to the target system on the specified port
        result = sock.connect_ex((target, port))

        # Check if the port is open (connect_ex returns 0 if the port is open)
        if result == 0:
            print(f"Port {port} is open.")
        else:
            print(f"Port {port} is closed.")
        sock.close()

target_ip = '192.168.1.1'
port_range = (1, 1024)

scan_ports(target_ip, port_range)
