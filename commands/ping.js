const { ICommand } = require('wokcommands');
module.exports = {
  category: 'Moderation',
  description: 'Replies with Pong',
  slash: true,
  testOnly: true,

  callback: ({channel, interaction}) => {
    interaction.reply({content: 'Pong!'})
  },
}