import DiscordJS from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [3276799]
})

client.on('ready', () => {
    client.user?.setPresence({ activities: [{ name: '/help' }], status: 'online' });
    console.log('bot encendido')

    const guildId = '1009243706538348544'
    const guild = client.guilds.cache.get(guildId)
    let commands
    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }
    commands?.create({
        name:'ping',
        description: 'Replies with pong',
    })
})
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }
    const { commandName, options, } = interaction
    if (commandName === 'ping') {
        interaction.reply({
            content: 'Pong!',
        })
    }
})
client.login(process.env.token)