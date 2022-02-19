module.exports = {
  category: 'Owner',
  description: 'Sets Status',
  ownerOnly: true,
  slash: 'both',
  options: [
    {
      name: 'type',
      description: 'Status Type',
      type: 'STRING',
      required: true
    },
    {
      name: 'message',
      description: 'Message',
      type: 'STRING',
      required: false
    }
  ],
  callback: async ({ client, interaction, message, args }) => {
    if (message) {
      try {
if (args[0].toLowerCase() === 'w') {
  args.shift();
  let status = args.join(' ');
  client.user.setActivity(` - ${status}`, {type: "WATCHING"});
  message.channel.send(`Set Status to: ${status}, with Watching Tag`)
} else if (args[0].toLowerCase() === 'p') {
  args.shift();
  let status = args.join(' ');
  client.user.setActivity(`${status}`, {type: "PLAYING"});
  message.channel.send(`Set Status to: ${status}, with Playing Tag`)
} else if (args[0].toLowerCase() === 'default') {
  client.user.setActivity(' - Powered by Redstone', {type: "WATCHING"});
  message.channel.send('Set Status to: Default Status')
}
    } catch(err) {
      message.channel.send('Please specify a type of Status!')
    };
    };
    if (interaction) {
      const type = interaction.options.getString('type');
        const content = interaction.options.getString('message')
      try {
if (type === 'w') {
  client.user.setActivity(` - ${content}`, {type: "WATCHING"});
  interaction.reply(`Set Status to: ${status}, with Watching Tag`)
} else if (type === 'p') {
  client.user.setActivity(`${content}`, {type: "PLAYING"});
  interaction.reply(`Set Status to: ${status}, with Playing Tag`)
} else if (type === 'default') {
  client.user.setActivity(' - Powered by Redstone', {type: "WATCHING"});
 interaction.reply('Set Status to: Default Status')
}
    } catch(err) {
      interaction.reply('Please specify a type of Status!');
        console.log(err)
    };
    }
}
}