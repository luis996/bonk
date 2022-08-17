const { ICommand } = require("wokcommands")
const { EmbedBuilder } = require('discord.js');
const helpEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('/help')
	.addFields(
		{ name: '/help', value: 'Shows this embed' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '/ping', value: 'Replies with Pong!', inline: true },
		{ name: '/clear <Argument>', value: 'Removes messages', inline: true },
	)
  .addFields({name: 'NONE', value: 'NONE', inline: true})
module.exports = {
  category: 'Helping',
  description: 'Get all the commands',

  slash: true,
  testOnly: false,

  callback: ({ interaction }) => {
    interaction.reply({ embeds: [helpEmbed] })
  },
}