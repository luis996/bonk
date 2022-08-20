const { ICommand } = require('wokcommands');
module.exports = {
    category: 'Moderation',
    description: 'Kicks an user out of the server',

    permissions: ['ADMINISTRATOR'],
    slash: true,
    testOnly: true,
    guildOnly: true,
    
    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],

    callback: ({ interaction, args }) => {
        const target = message ? message.mentions.members?.first() : interaction.options.getMember('user')
        if (!target) {
            return 'Error when running command, Output: Target does not exist'
        }
        if (!target.kickable) {
            return 'Error when running command, Output: The user is not kickable'
        }
        args.shift()
        const reason = args.join(' ')

        target.kick(reason)

        return `Kicked user: <@${target.id}>`
    }
}