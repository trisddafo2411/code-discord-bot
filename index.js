const discord = require('discord.js');
const config = require('./config.json');

var bot = new discord.Client();

bot.on('ready', function() {
    console.log("bot is now online");
})

bot.on('message', async message => {
    if(message.content === 'ping') {
        message.channel.send('pong');
    }
})

bot.login(config.token);