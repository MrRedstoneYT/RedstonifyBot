const { color, DJSBotName, version, DJSBotOwner } = require('../config.json')
const { MessageEmbed } = require('discord.js')
module.exports = {
  category: 'Owner',
  description: 'Turns off bot',
  ownerOnly: true,
  slash: 'both',
  callback: ({ message, args, interaction }) => {
    if (message) {
      const embed = new MessageEmbed()
        .setColor(color)
        .setAuthor(`${message.author.username} is shutting down ${DJSBotName} \n Bot Owner: ${DJSBotOwner} \n Bot Version: ${version}`);
    message.reply({ embeds: [embed] }).then(() => {
      process.exit();
    });
    }
    if (interaction) {
      const embed = new MessageEmbed()
        .setColor(color)
        .setAuthor(`${interaction.member.username} is shutting down ${DJSBotName} \n Bot Owner: ${DJSBotOwner} \n Bot Version: ${version}`);
    interaction.reply({ embeds: [embed] }).then(() => {
      process.exit();
    });
    }
}
}