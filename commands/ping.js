const { ICommand } = require('wokcommands');
module.exports = {
  category: 'Moderation',
  description: 'Replies with Pong',
  slash: true,
  testOnly: false,

  callback: ({ interaction }) => {
    interaction.reply({content: 'Pong!'})
  },
}