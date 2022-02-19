const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const canvas = require('canvas')
const { Intents } = DiscordJS
//Line 6 only needed if running on repl
const keepAlive = require("./server.js")
const { Prefix } = require("./config.json")
const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})
client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    botOwners: ['630412665662996481', '408086350953447425'],
      disabledDefaultCommands: [
             'help',
             'command',
             'language',
             'prefix',
             'requiredrole',
             'channelonly'
        ]
  })
  .setDefaultPrefix(Prefix)
  console.log(`Logging in as ${client.user.tag}!`)

  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
})

keepAlive()
client.login(process.env.TOKEN)

module.exports = {client};