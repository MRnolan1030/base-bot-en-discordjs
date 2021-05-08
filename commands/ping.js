const Discord = require('discord.js');

module.exports.run = (client, message, args, ops) => {

    try{

    let debut = Date.now();
    message.channel.send(":ping_pong: Ping").then((m) => m.edit(`Pong : ${Date.now() - debut} ms:ping_pong: `));

    }catch(err) {
        //Dans ID CHANNEL, mettez l'ID du salon dans le quelle vous voulez que les erreurs soient envoyé
        const errorlogs = client.channels.cache.get('ID CHANNEL)
        message.channel.send(`Ouppss, Une erreur est survenue! L'erreur à été signalée aux développeurs!`).then(msg => {msg.delete(5000)})
    
        const errembed = new Discord.MessageEmbed()
        .setTitle(":pushpin: __ERREUR__")
        .addField("Commande :", "`ping`")
        .addField("Erreur : ", `${err}`)
        .addField("Du serveur :", `${message.guild.name}`)
        .addField("Auteur :", `${message.author.username}`)
        .setTimestamp()
        .setColor("#fff")
        
        errorlogs.send(errembed)
      }

};

module.exports.help = {
    name: "ping"
}
