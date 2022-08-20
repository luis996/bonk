import DiscordJS from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [3276799]
})

client.on('ready', () => {
  console.log(process.env.token)
  console.log(process.env.MONGO_URI)
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['1009243706538348544'],
    typeScript: true
  })
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