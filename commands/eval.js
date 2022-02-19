const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { color } = require('../config.json')
module.exports = {
  category: 'Owner',
  description: 'Eval Command',
  ownerOnly: true,
  slash: 'both',
  options: [
    {
      name: 'js',
      description: 'Javascript',
      type: 'STRING',
      required: true
    }
  ],
  callback: async ({ guild, client, message, args, interaction }) => {
    if (message) {
      try {
      const evaled = eval(args.join(" "));

message.channel.send(`\`\`\`js\n${evaled}\n\`\`\``);
    } catch (err) {
      console.log(err)
    }
    }
    if (interaction) {
      try {
        const evalme = interaction.options.getString('js')
      const evaled = eval(js);

interaction.reply(`\`\`\`js\n${evaled}\n\`\`\``);
    } catch (err) {
      console.log(err)
    }
    }
}
}