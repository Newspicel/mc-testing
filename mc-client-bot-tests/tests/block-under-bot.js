function run(bot) {
  const block = bot.blockAt(bot.entity.position.offset(0, -1, 0))
  console.log(`Block at ${block.position} is ${block.type}`)
}

export default {
  run
}