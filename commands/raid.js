const { ICommand } = require('wokcommands');
module.exports = {
  category: 'Moderation',
  description: 'Raids the server',

  slash: true,
  testOnly: false,

  callback: async ({channel, interaction}) => {
    const reply = 'Eres mas imbecil que mi abuela, este bot no es para raidear'
    interaction.reply({
      content: reply,
      ephemeral: false,
    })
  },
}