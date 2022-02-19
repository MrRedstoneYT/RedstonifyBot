const { Canvas } = require('canvacord')
const { MessageAttachment } = require('discord.js')

module.exports = {
  category: 'Messaging',
  description: 'RIP',
  slash: 'both',
  options: [
    {
      name: "user",
      description: "A user to mention",
      type: "USER",
      required: true
    }
  ],
  callback: async ({ message, args, interaction }) => {
    if (message) {
      const user = message.mentions.users.first();
      if (!user) return message.reply('gimme a person to RIP!');

      const avatar = user.avatarURL({ format: 'png' });
      const image = await Canvas.rip(
        message.author.avatarURL({ format: 'png' }),
        avatar
      );

      const ch = new MessageAttachment(image, "image.gif")
      message.channel.send({ files: [ch] })

      return;
    }
    interaction.reply('Compiling Image!').then(
      setTimeout(function() {
        interaction.editReply({ content: `RIP ${user.username}!`, files: [ch] })
      }, 10000)
      );
      const user = interaction.options.getUser('user')
    const avatar = user.avatarURL({ format: 'png' });
    const image = await Canvas.rip(
      avatar
    );

    const ch = new MessageAttachment(image, "image.gif");
  }
}