const { color } = require('../config.json')
const { MessageEmbed } = require('discord.js')
module.exports = {
  category: 'Messaging',
  description: 'Gives user\'s Profile Picture',
  slash: 'both',
  options: [
    {
      name: 'user',
      description: 'PfP',
      type: 'USER'
    }
  ],
  callback: ({ message, args, interaction }) => {
    if (message) {
      const user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
        .setColor(color)
        .setAuthor(`${user.username}‘s Profile Picture:`)
        .setImage(user.avatarURL({ dynamic: true, size: 256}));
    message.channel.send({ embeds: [embed] });
    }
    if (interaction) {
      const user = interaction.options.getUser('user') || interaction.user
    const embed = new MessageEmbed()
        .setColor(color)
        .setAuthor(`${user.username}‘s Profile Picture:`)
        .setImage(user.avatarURL({ dynamic: true, size: 256}));
    interaction.reply({ embeds: [embed] });
    }
}
}