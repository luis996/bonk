import DiscordJS from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [3276799]
})

client.on('ready', () => {
    client.user?.setPresence({ activities: [{ name: '/help' }], status: 'online' });
    console.log('bot encendido')
})
client.login(process.env.token)