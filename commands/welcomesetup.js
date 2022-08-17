const { ICommand } = require('wokcommands');
module.exports = {
  category: 'Utility',
  description: 'Sets up the welcome for bonk bot',
  slash: true,
  testOnly: true,

  callback: ({channel, message, interaction}) => {
    message.guild.channels.create('bonk-welcome-9n', {
        type: 'GUILD_TEXT',
        permissionOverwrites: [{
            id: message.guild.id,
        }]
    });
    interaction.reply({content: 'bonk-welcome-9n set up succesfully (¿?)',})
  },
}