module.exports = function({bot, commands}){
  commands.addGlobalCommand ('help', '', (msg, args) => {
  bot.createMessage (msg.channel.id, `**See the bot's commands at:**
https://github.com/Dragory/modmailbot/blob/master/docs/commands.md`);
  });
}
