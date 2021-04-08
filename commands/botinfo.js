const Discord = require("discord.js")
const moment = require("moment");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

module.exports.run = (client, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        //const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.MessageEmbed()
            .setColor("#fff")    
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .addField(":white_check_mark:__En ligne depuis__ :", (Math.round(client.uptime / (100 * 60 * 60))) + 'h ' + (Math.round(client.uptime / (1000 * 60)) % 60) + 'min ' + (Math.round(client.uptime / 1000) % 60) + 'sec')
            .addField("🔧 __Discord.js__ :", `v12.2.0`)
            .addField("🔨 __Node.js__ :", `${process.version}`)
            .addField("🎛️ __Architecture__", `${os.arch}`)
            .addField("💾 __Usage Mémoire__", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)           
            .addField("🎛️ __Usage CPU__", `\`${(percent.toFixed(2) / 10)} %\``)
            .setTimestamp()
            .setFooter("Informations sur Base bot Discord.js")
            
        
            message.channel.send(embedStats)
    });
};

module.exports.help = {
    name: "botinfo",
    aliases: ['bi']
}