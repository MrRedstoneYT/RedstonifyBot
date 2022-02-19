module.exports = {
  category: 'Messaging',
  description: 'Replies with Bot Stats',
  slash: 'both',
  callback: ({ client, message, args, interaction }) => {
        if (message) {
          const sname = client.guilds.cache.map(g=>g.name).join('\n');
          message.reply(`There are ${client.guilds.cache.size} servers, with ${client.channels.cache.size} channels!\nServers: \n\`${sname}\``)
        }
    if (interaction) {
      const sname = client.guilds.cache.map(g=>g.name).join('\n');
      interaction.reply(`There are ${client.guilds.cache.size} servers, with ${client.channels.cache.size} channels! \nServers: \n\`${sname}\``)
    }
}
}