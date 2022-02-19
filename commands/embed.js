module.exports = {
  category: 'Owner',
  description: 'Replies with Embed',
  ownerOnly: true,
  callback: ({ message, args }) => {
    const targetChannel = message.mentions.channels.first()
    if (!targetChannel) {
      message.reply('Please specify a channel to send the embed to')
      return
    }

    args.shift()

    try {
      const json = JSON.parse(args.join(' '))
  message.delete()
   targetChannel.send({ embeds: [json] })
    } catch(error) {
      message.channel.send('Error in JSON code:')
      message.channel.send(`${error.message}`)
    }
}
}