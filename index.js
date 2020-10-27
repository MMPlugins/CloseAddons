module.exports = ({ bot, utils, commands }) => {
    commands.addInboxThreadCommand('messageclose', '[text$]',  async (msg, args, thread) => {
      if (! args.text && msg.attachments.length  === 0) {
        utils.postError(msg.channel, 'Text or Attachment is required');
        return;
      }
  
      const threadchannel = await thread.getDMChannel();
      bot.createMessage(threadchannel.id, `**${args.text}**`, msg.attachments, false);
      msg.delete();
      thread.close();
    });
  };
