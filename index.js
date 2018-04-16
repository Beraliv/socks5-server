const socksv5 = require('socksv5')

const PORT = 1080
const server = socksv5.createServer((_, resolve) => resolve())

server.listen(PORT, () => console.log(`Listen: localhost:${PORT}`))
server.useAuth(socksv5.auth.UserPassword((username, password, cb) => {
  console.log(`Connected a new user: ${username} ${password}`)
  cb(true)
}))