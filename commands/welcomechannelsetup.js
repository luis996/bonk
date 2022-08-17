const { ICommand } = require('wokcommands');
module.exports = {
  category: 'Utility',
  description: 'Sets up the welcome for bonk bot',
  slash: true,
  testOnly: true,

  callback: ({channel, interaction}) => {
    interaction.reply({content: 'Setup for channel name: bonk-welcome-9n',})
  },
}