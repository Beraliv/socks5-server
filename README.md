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



### Windows

1. Find and open `C:\Windows\System32\drivers\etc\hosts`
2. Add a new line at the end: `$YOUR_IP_HERE$ $NAME$`, i.e. `173.21.33.95 s5ts.local`
3. Connect using specified settings:

![Connection Type](https://github.com/Beraliv/socks5-telegram-server/blob/master/images/proxy-settings.png)

or

![Connection Type (alternative way)](https://github.com/Beraliv/socks5-telegram-server/blob/master/images/proxy-settings-2.png)