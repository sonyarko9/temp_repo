const os = require('os')

//info about user
const me = os.userInfo()
console.log(me)

// returns system Uptime in secons
console.log(`System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
}
console.log(currentOS)