module.exports = (client, instance) => {
    // Listen for new members joining a guild
    client.on("guildMemberAdd", (member) => {
      // Access the guild that they joined
      const { guild } = member
  
      // Get the channel named "welcome"
      const channel = guild.channels.cache.find(
        (channel) => channel.name === "bonk-welcome-9N"
      )
      
      // Ensure this channel exists
      if (!channel) {
        return
      }
  
      // Send the welcome message
      channel.send(`Welcome ${member} to the server! Bot by Luis64_gamer`)
    })
  }