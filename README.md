# socks5-telegram-server

Node.js server supporting SOCKS5 protocol

## Quick start

> You can use either `npm` or `yarn` to follow the instructions

1. Download Git repo:
```bash
git clone https://github.com/Beraliv/socks5-telegram-server
```

2. Download dependencies:
```bash
npm i

yarn
```

3. Start the server simply:
```bash
npm run start

yarn start
```

## Configurations

You need to configure both server and client

### Create instance

1. Sign up to AWS (you can connect your card for $1 for the first year)
2. [Console](https://console.aws.amazon.com/ec2) > EC2 Dashboard > Launch instance
3. Ubuntu Server 16.04 LTS (HVM), SSD Volume Type > Select
4. t2.micro (Free tier eligible) > Next: Configure Instance Details
5. Next: Add Storage
6. Set Size (GiB) to `30` (maximum free available) > Next: Add Tags
7. Next: Configure Security
8. Add Type `Custom TCP Rule` with Port `1080` and Souce `Custom` with `0.0.0.0/0` for SOCKS5 > Review and Launch
9. Launch > Create a new key pair with Key pair name, i.e. `aws-keys` > Download Key Pair (it will download a private key with specified name, i.e. `aws-keys.pem`) > Launch Instances

### SSH (Windows)

1. Install [PuTTY](https://putty.org.ru/download.html)
2. Install [WinSCP](https://winscp.net/eng/download.php)
3. WinSCP > Fill Host name with `IPv4 Public IP` from `Instances` in AWS Dashboard > Fill Port number with `22` for SSH
4. Advanced > SSH > Authentication > Private key file > All private Keys Files > Choose `aws-keys.pem` > OK (convert to `.ppk`) > OK (Close Advanced Site Settings)
5. Save > Login > Write `ubuntu` (default for AWS) > Enter
6. Use `Ctrl + P` for console

### Deploy server

1. See [Quick Start](https://github.com/Beraliv/socks5-telegram-server#quick-start)
2. Go to services directory with `cd /etc/systemd/system`
3. Create service for the server with `sudo touch s5ts.service`
4. Give write permissions to all users to the file with `sudo chmod a+w s5ts.service`
5. Open file with Vim using `vim s5ts.service`
6. Insert (with right button of the mouse)

```
[Unit]
Description=Node server which supports SOCKS5 protocol

[Service]
ExecStart=/home/ubuntu/socks5-telegram-server/index.js
Restart=always
User=nobody
# Note RHEL/Fedora uses 'nobody', Debian/Ubuntu uses 'nogroup'
Group=nobody  
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=/home/ubuntu/socks5-telegram-server

[Install]
WantedBy=multi-user.target
```

7. `Esc` + `:wq!` will save and exit from Vim
8. Make systemd aware of the new service with `sudo systemctl daemon-reload`
9. Make the service start on boot with `sudo systemctl enable s5ts`

### Windows Client

1. Find and open `C:\Windows\System32\drivers\etc\hosts`
2. Add a new line at the end: `$YOUR_IP_HERE$ $NAME$`, i.e. `173.21.33.95 s5ts.local`
3. Connect using specified settings:

![Connection Type](https://github.com/Beraliv/socks5-telegram-server/blob/master/images/proxy-settings.png)

or

![Connection Type (alternative way)](https://github.com/Beraliv/socks5-telegram-server/blob/master/images/proxy-settings-2.png)