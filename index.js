console.log("NodeJS Version: " + process.version)
const express = require('express');
const app = express()

app.get('/', function(req, res) {
  res.send('bot encendido')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()
///////////////////////BOT//////////////////////////////
const DiscordJS = require("discord.js");
const { Intents } = require("discord.js");
const WOKCommands = require("wokcommands");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config()

const client = new DiscordJS.Client({
  intents: [3276799]
})

function presence() {
  client.user.setPresence({ activities: [{ name: 'bonk!help' }] });
}
client.on("ready", () => {
   console.log("bot cargado");

   new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    testServers: '1009243706538348544',
   })
   presence();
});
client.on("messageCreate", (message) => {
  if (message.content.startsWith("bonk!ping")) try {
    let user = message.mentions.users.first();
    message.channel.send("ping <@" + user.id + ">");
    message.channel.send("ping <@" + user.id + ">");
    message.channel.send("ping <@" + user.id + ">");
    message.channel.send("ping <@" + user.id + ">");
    message.channel.send("ping <@" + user.id + ">");
  } catch (error) { message.channel.send("mencionaste a un usuario?"); }
  if (message.content === ("bonk!help")) {
    message.channel.send("1.- bonk!colaboraciones");
    message.channel.send("2.- bonk!changelog");
    message.channel.send("3.- bonk!YT");
    message.channel.send("4.- bonk!version");
    message.channel.send("pagina 1/2 bonk!help 2");
  }
  if (message.content === ("bonk!help 2")) {
    message.channel.send("5.- bonk!ping");
    message.channel.send("6.- bonk!clear");
    message.channel.send("7.- bonk!flood");
    message.channel.send("pagina 2/2");
  }

  if (message.content === ("bonk!dev 3483349")) {
    message.channel.send("1.- ");
  }
  if (message.content === ("bonk!YT")) {
    message.channel.send("https://www.youtube.com/channel/UCAVcV14PScDTIaR6THsQDpA");
  }
  if (message.content === ("bonk!changelog")) {
    message.channel.send("0.5.5 beta Añadido Changelog y codigo inecesario reducido");
    message.channel.send("1.9 beta Codigo innecesario reducido");
    message.channel.send("2.0a1 bonk!YT y bonk!version añadido");
    message.channel.send("2.1 Implementado comando nuevo y paginas para bonk!help");
    message.channel.send("1/2 bonk!changelog 2");
  }
  if (message.content === ("bonk!changelog 2")) {
    message.channel.send("2.2b4 reduccion desde 120 lineas a 82 lineas y eficiencia radical");
    message.channel.send("2.2b5 HOTFIX: bonk!ping eliminado y en los comandos Developer");
    message.channel.send("2.5 **???**");
    message.channel.send("3.7 perdida de datos por actualizacion a discord.js v13");
    message.channel.send("pagina 2/2");
  }
  if (message.content === ("bonk!version")) {
    message.channel.send("**3.7**");
  }
  if (message.content === ("bonk!colaboraciones")) {
    message.channel.send("ＤａＲｋ　仮うン#9317");
  }
  if (message.content === ("bonk!clear")) {
    let amount = 50
    channel.bulkDelete(amount)
  }
  if (message.content === ("bonk!flood")) {
    message.channel.send("1.- usa bonk!flood>default para usar el evento por defecto");
  }
  if (message.content === ("bonk!flood>default")) {
    message.channel.send("@everyone");
    message.channel.send("@everyone");
    message.channel.send("@everyone");
    message.channel.send("@everyone");
    message.channel.send("@everyone");
  }
});
client.login(process.env.token);