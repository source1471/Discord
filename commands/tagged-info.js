module.exports = {
    name: 'tagged-info',
    description: 'gets the info of a tagged user',
    execute(message, args)
    {
        const taggedinfo = message.mentions.users.map(user =>
        {
            return `${user.username}'s cid: ${user.id}`;

        });


    message.channel.send(taggedinfo);
    },

};