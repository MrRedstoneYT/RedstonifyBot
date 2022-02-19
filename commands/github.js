const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { color } = require('../config.json')
module.exports = {
  category: 'Meesaging',
  description: 'Replies with GitHub Link',
  slash: 'both',
  callback: ({ message, interaction, args }) => {
    if (message) {
      const row = new MessageActionRow()
      .addComponents(
      new MessageButton()
      .setLabel('GitHub')
      .setStyle('LINK')
      .setURL('https://github.com/MrRedstoneYT/RedstonifyBot')
    );
    const EMB = new MessageEmbed()
    .setDescription('Redstonify is a project made by Mr. Redstone, you can download my source code from my GitHub page!')
    .setColor(color);
        message.reply({ embeds: [EMB], components: [row] })
    }
    if (interaction) {
      const row = new MessageActionRow()
      .addComponents(
      new MessageButton()
      .setLabel('GitHub')
      .setStyle('LINK')
      .setURL('https://github.com/MrRedstoneYT/RedstonifyBot')
    );
    const EMB = new MessageEmbed()
    .setDescription('Redstonify is a project made by Mr. Redstone, you can download my source code from my GitHub page!')
    .setColor(color);
        interaction.reply({ embeds: [EMB], components: [row] })
    }
  }
}