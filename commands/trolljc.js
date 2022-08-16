const { ICommand } = require('wokcommands');
module.exports = {
  category: 'Trolling',
  description: 'Deletes out a message without leaving logs',

  permissions: ['ADMINISTRATOR'],

  slash: true,
  testOnly: false,

  callback: async ({channel, interaction}) => {
    channel.bulkDelete(1)
    const reply = 'Only you can see this, Message deleted and log WIPED'
    interaction.reply({
      content: reply,
      ephemeral: true,
    })
  },
}