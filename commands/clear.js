const { ICommand } = require('wokcommands');
module.exports = {
  category: 'Moderation',
  description: 'Deletes specified number of messages',

  permissions: ['ADMINISTRATOR'],

  maxArgs: 1,
  expectedArgs: '[amount]',

  slash: true,
  testOnly: false,

   callback: async ({ message, interaction, channel, args }) => {
    const amount = args.length ? parseInt(args.shift()) : 10
    if (amount + 1 > 100) {
      return 'Crasheo del nucleo del bot detectado, cancelando accion. **Esto se puede deber a que el numero es mayor que 99 o menor que 1**';
    }

    if (amount === 0) {
      return 'Crasheo del nucleo del bot detectado, cancelando accion. **Esto se puede deber a que el numero es mayor que 99 o menor que 1**';
    }

    const { size } = await channel.bulkDelete(amount, true)

    const reply = `${size} mensajes eliminados`
    return reply

  }
}