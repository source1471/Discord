// require the discord.js module
const Discord = require('discord.js');
// require the prefix and token
const config = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
// logs messages
client.on('message', message => {
	console.log(message.content);
});
// first test command
if (message.content === '!ping') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('Pong.');
}
// login to Discord with your app's token
client.login('your-token-goes-here');