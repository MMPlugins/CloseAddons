module.exports = function({commands}){
  commands.addGlobalCommand ('web', '', (msg, args) => {
  bot.createMessage (msg.channel.id, `**See the bot's commands at:**
https://github.com/Dragory/modmailbot/blob/master/docs/commands.md`);
  });
}
