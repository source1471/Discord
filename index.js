// require the discord.js module
const Discord = require('discord.js');
// require the prefix and token
const {prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
// checks if message contains ! or if it was sent by another bot
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
// logs messages
client.on('message', message => {
	console.log(message.content);
});
// first test command
if (message.content === `${prefix}ping`) {
	message.channel.send('Pong.');
// secoend test command
} else if (message.content === `${prefix}beep`) {
	message.channel.send('Boop.');
}
// displays server name and user count
else if (message.content === `${prefix}server`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}
// shows user name and user id
else if (message.content === `${prefix}user-info`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}
else if (command === 'kick') {
	// grab the "first" mentioned user from the message
	// this will return a `User` object, just like `message.author`
	if (!message.mentions.users.size) {
		return message.reply('you need to tag a user in order to kick them!');
	}
	const taggedUser = message.mentions.users.first();

	message.channel.send(`You wanted to kick: ${taggedUser.username}`);
}
else if (command === 'avatar') {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
	}

	const avatarList = message.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
	});

	// send the entire array of strings as a message
	// by default, discord.js will `.join()` the array with `\n`
	message.channel.send(avatarList);
}













// login to Discord with your app's token
client.login(token);