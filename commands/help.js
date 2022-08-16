const { ICommand } = require("wokcommands")
const { EmbedBuilder } = require('discord.js');
const helpEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('/help')
	.addFields(
		{ name: 'Help', value: 'Shows this' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
module.exports = {
  category: 'Helping',
  description: 'Get all the commands',

  slash: true,
  testOnly: false,

  callback: ({ interaction }) => {
    interaction.reply({ embeds: [helpEmbed] })
  },
}