const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("<a:loading2:708930492983935016> Génération de l'avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.MessageEmbed()

        .setImage(mentionedUser.displayAvatarURL())
        .setColor("#fff")
        .setTitle("🙎 Avatar")
        .setFooter("Demandé par " + message.author.tag)
        .setTimestamp()

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar"
}