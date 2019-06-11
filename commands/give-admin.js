module.exports = {
	name: 'give-admin',
	description: 'gives a user admin',
	execute(message, args)
    {
		if (message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(`admin`);

	},
};