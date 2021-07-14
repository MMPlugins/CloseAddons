module.exports = function({ bot, commands }) {
    commands.addInboxThreadCommand('messageclose', '[text$]',  async (msg, args, thread) => {
      if (! args.text && msg.attachments.length  === 0) {
        msg.channel.createMessage('Text or Attachment is required');
        return;
      }
      
      
      const threadchannel = await thread.getDMChannel();
      bot.createMessage(threadchannel.id, `${args.text}`, msg.attachments, false);
      msg.delete();
      thread.close();
    });
    commands.addInboxThreadCommand('reasonclose', '[text$]',  async (msg, args, thread) => {
      if (! args.text && msg.attachments.length  === 0) {
        msg.channel.createMessage('Text or Attachment is required');
        return;
      }
  
      const threadchanneltwo = await thread.getDMChannel();
      bot.createMessage(threadchanneltwo.id, `Thread closed. Reason: ${args.text}`, msg.attachments, false);
      msg.delete();
      thread.close();
    });
  };
