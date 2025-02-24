In this task, you must use `tcpdump` to filter live network packet traffic on an interface.

Use `ifconfig` to identify the interfaces that are available:

`sudo ifconfig`
![[Pasted image 20250224093059.png]]

Use `tcpdump` to identify the interface options available for packet capture:

`sudo tcpdump -D`
![[Pasted image 20250224093301.png]]

- Filter live network packet data from the `eth0` interface with `tcpdump`:

`sudo tcpdump -i eth0 -v -c5`

![[Pasted image 20250224093510.png]]

Capture packet data into a file called `capture.pcap`:

`sudo tcpdump -i etho0 -nn -c9 port 80 -w capture.pcap &`

This command will run `tcpdump` in the background with the following options:

- `-i eth0`: Capture data from the `eth0` interface.
- `-nn`: Do not attempt to resolve IP addresses or ports to names.This is best practice from a security perspective, as the lookup data may not be valid. It also prevents malicious actors from being alerted to an investigation.
- `-c9`: Capture 9 packets of data and then exit.
- `port 80`: Filter only port 80 traffic. This is the default HTTP port.
- `-w capture.pcap`: Save the captured data to the named file.
- `&`: This is an instruction to the Bash shell to run the command in the background.

![[Pasted image 20250224093815.png]]

Use the `tcpdump` command to filter the packet header data from the `capture.pcap` capture file:

`sudo tcpdump -nn -r capture.pcap -v`

- `-nn`: Disable port and protocol name lookup.
- `-r`: Read capture data from the named file.
- `-v`: Display detailed packet data.

Use the `tcpdump` command to filter the extended packet data from the `capture.pcap` capture file:

`sudo tcpdump -nn -r capture.pacap -X`

- `-X`: Display the hexadecimal and ASCII output format packet data. Security analysts can analyze hexadecimal and ASCII output to detect patterns or anomalies during malware analysis or forensic analysis.

![[Pasted image 20250224094333.png]]

