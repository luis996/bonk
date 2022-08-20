import DiscordJS from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [3276799]
})

client.on('ready', () => {
  console.log('Sending debug info')
  console.log(process.env.token)
  console.log(process.env.MONGO_URI)
})

client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    console.log('input: ping, output: pong')
    message.reply({
      content: 'pong',
    })
  }
})

client.login(process.env.token)