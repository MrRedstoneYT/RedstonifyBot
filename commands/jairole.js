const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { color } = require('../config.json')
module.exports = {
  category: 'Roles',
  description: 'Replies with Role selector',
  ownerOnly: true,
  slash: 'both',
  callback: ({ message, interaction, args }) => {
    if (message) {
      const row = new MessageActionRow()
      .addComponents(
      new MessageButton()
      .setLabel('Furry')
      .setStyle('SUCCESS')
      .setCustomId('Furry'),
        new MessageButton()
      .setLabel('Furry Friend')
      .setStyle('SUCCESS')
      .setCustomId('FurryFriend'),
        new MessageButton()
      .setLabel('Marbles')
      .setStyle('SUCCESS')
      .setCustomId('Marbles'),
        new MessageButton()
      .setLabel('Among Us')
      .setStyle('SUCCESS')
      .setCustomId('AmongUs')
    );
    const EMB = new MessageEmbed()
    .setDescription('Pick a Role! \n \nPick from the following list [Furry, Furry Friend, Marbles, Among Us]')
    .setColor(color);
        message.channel.send({ embeds: [EMB], components: [row] })
    }
    if (interaction) {
      const row = new MessageActionRow()
      .addComponents(
      new MessageButton()
      .setLabel('Furry')
      .setStyle('SUCCESS')
      .setCustomId('Furry'),
        new MessageButton()
      .setLabel('Furry Friend')
      .setStyle('SUCCESS')
      .setCustomId('FurryFriend'),
        new MessageButton()
      .setLabel('Marbles')
      .setStyle('SUCCESS')
      .setCustomId('Marbles'),
        new MessageButton()
      .setLabel('Among Us')
      .setStyle('SUCCESS')
      .setCustomId('AmongUs')
    );
    const EMB = new MessageEmbed()
    .setDescription('Pick a Role! \n \nPick from the following list [Furry, Furry Friend, Marbles, Among Us]')
    .setColor(color);
        interaction.channel.send({ embeds: [EMB], components: [row] })
    }
  }
}