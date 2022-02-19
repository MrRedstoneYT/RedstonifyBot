module.exports = {
  category: 'Messaging',
  description: 'Replies with User Message',
  slash: 'both',
  options: [
    {
      name: 'message',
      description: 'The message to say',
      type: 'STRING',
      required: true
    }
  ],
  callback: ({ message, interaction }) => {
    if (message) {
      const MSG = message.content.slice(5).trim();
      message.delete();
      message.channel.send(MSG);

      return;
    }

    let content = interaction.options.getString('message');
    interaction.channel.send(content);
    interaction.reply({ content: 'Sent!', ephemeral: true })
  }
}