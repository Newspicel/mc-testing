const mineflayer = require('mineflayer')
const blockunderbot = require('./tests/block-under-bot.js')

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


const bot = mineflayer.createBot({
  host: process.env.HOST,
  port: process.env.PORT,
  username: 'Bot', // minecraft username
})

console.log('Bot created')

bot.on('spawn', () => {
  bot.chat('Hello, world!')
  console.log('Bot spawned')
  
  console.log('Running tests')
  blockunderbot.run(bot)
  console.log('Tests finished')


  bot.quit()
  console.log('Bot quieted')
})


bot.on('chat', (username, message) => {
  console.log(`${username}: ${message}`)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
