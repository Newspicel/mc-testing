const mineflayer = require('mineflayer')

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const bot = mineflayer.createBot({
  host: process.env.HOST,
  port: process.env.PORT,
  username: 'Bot', // minecraft username
})

console.log('Bot created')

bot.on('spawn', () => {
  bot.chat('Hello, world!')
  console.log('spawn')

  await sleep(10000)
  bot.quit()
})


bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
  
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
