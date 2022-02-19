const { Canvas } = require('canvacord')
const { MessageAttachment } = require('discord.js')
module.exports = {
  category: 'Messaging',
  description: 'TRIGGERED',
  slash: 'both',
  callback: async ({ message, interaction }) => {
    if (message) {
      const image = await Canvas.trigger(
        message.author.avatarURL({ format: 'png' })
      );
      const ch = new MessageAttachment(image, "image.gif");
      message.channel.send({ files: [ch] })
      
      return;
    }
    interaction.reply('Compiling Image!').then(
      setTimeout(function() {
        interaction.editReply({ content: `${interaction.user.username} is triggered!`, files: [ch] })
      }, 10000)
    );
    const image = await Canvas.trigger(
      interaction.user.avatarURL({ format: 'png' })
    );
    const ch = new MessageAttachment(image, "image.gif");
}
}