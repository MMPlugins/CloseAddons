# Development branch for the CloseAddons plugin for [Dragory's ModMail](https://github.com/dragory/modmailbot)

### Setup: ###
Make sure your running at least v3.0.3 of Modmail.
in your config.ini file, make a new line and add:  
```ini
plugins[] = npm:MMPlugins/MessageClose#dev
```
Restart your bot! 

And that's it! 
Use: 
[prefix]messageclose <content> in a thread (by default, your prefix is !) or 
[prefix]reasonclose <content> to close with a reason and watch the magic! 
