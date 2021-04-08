const config = require("../config.json");

module.exports = (client) => {
    console.log(`Connecté en tant que ${client.user.tag}!`);

    client.user.setActivity(`Base Bot Discord.js`, {
        type: "PLAYING"
    });
};