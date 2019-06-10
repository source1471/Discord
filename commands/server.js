module.exports = {
	name: 'server',
	description: 'gives name and user count of server',
	execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};