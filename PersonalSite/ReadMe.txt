Thank you for stopping by.

I made this site as a CV and as a fun way to recreate some of oldest memories on a compute. I designed the UI to emulate the era of Windows 98. I love the clean crisp icons that were used back then along with the clear distinct lines.

You can navigate my site and the information much like a desktop computer. There are "shortcuts" that will pull open a page with a little more information about me.

I have hosted my personal site made with Next.js on my personal Oracle Cloud Server. 

You can visit the site at stephenlangford.dev or www.stephenlangford.dev

The steps I have taken while hosting this site:

After testing and building the project on my local machine using VS Code and NPM, I used scp with my private key to transfer the project to my Oracle server.

Next I used npm to install and build the production only version.

I used pm2(process manager 2) to run the project in the background. I then saved the pm2 state to the startup so that if the server crashed or restarted the site would automatically restart.

I created a custom DNS record on Squarespace.com and created the A Record for my server's IP address and a CNAME for stephenlangford.dev and www.stephenlangford.dev

While the DNS records were propagating, I took several steps to secure the site and server. 

The first was to limit the access to the server through the Oracle Virtual Cloud Network. Under my Security Rules I created the ingress rules to allow:
TCP traffic for port 80 HTTP
TCP traffic for port 442 HTTPS
TCP traffic for port 22 SSH

This made sure that no unintentional ports would be able to be opened or were left open.

The next step I took was to set up a Reverse Proxy using Nginx to foward from the HTTP and HTTPS ports 80 and 443 to the ps2 port 3000. 

I used firewalld and configured it to allow HTTP and HTTPS traffic through.

The last step was to use certbot to get an SSL certificate and configure Nginx to redirect the network traffic to the HTTPS protocol.
