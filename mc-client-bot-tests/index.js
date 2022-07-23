const mineflayer = require('mineflayer')

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


const bot = mineflayer.createBot({
  host: process.env.HOST,
  port: process.env.PORT,
  username: 'Bot', // minecraft username
})

console.log('Bot created')

bot.on('spawn', () => {
  bot.chat('Hello, world!')
  console.log('spawn')
  console.log(bot.entity.position)
  console.log(bot.game.gameMode)

  sleep(10000).then(() => {
    bot.chat('Goodbye, world!')
    console.log('sleep')
    bot.quit()
    console.log('quit')
  })
})


bot.on('chat', (username, message) => {
  console.log(`${username}: ${message}`)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
