const { ICommand } = require('wokcommands');
module.exports = {
  category: 'Moderation',
  description: 'Set ups a channel',
  slash: true,
  testOnly: false,

  callback: ({ interaction }) => {
    interaction.reply({content: 'Channel is ready, Name: bonk-welcome-9n'})
  },
}