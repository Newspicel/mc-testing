const mineflayer = require('mineflayer')


const bot = mineflayer.createBot({
  host: process.env.HOST,
  port: process.env.PORT,
  username: 'Bot', // minecraft username
})

console.log('Bot created')

bot.on('spawn', () => {
  bot.chat('Hello, world!')
  console.log('spawn')
})



bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
  
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)