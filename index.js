const socksv5 = require('socksv5')

const DOMAIN = 'socks5-telegram-server.herokuapp.com'
const PORT = 9002

const server = socksv5.createServer((_, resolve) => resolve())
server.listen(PORT, DOMAIN, () => console.log(`Listen: ${DOMAIN}:${PORT}`))
server.useAuth(socksv5.auth.UserPassword((username, password, cb) => {
  console.log(`Connected a new user: ${username} ${password}`)
  cb(true)
}))