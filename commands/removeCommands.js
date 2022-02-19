const { Canvas } = require('canvacord')
const { MessageAttachment } = require('discord.js')

module.exports = {
  category: 'Messaging',
  description: 'SLAP',
  slash: false,
  ownerOnly: true,
  callback: async ({ client, message }) => {
    client.application.commands.set([]);
    message.reply('done')
  }
}