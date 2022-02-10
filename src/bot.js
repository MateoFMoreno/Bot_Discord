require("dotenv").config();

const { Client } = require("discord.js");

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const messageReaction = require("../helpers/messageReaction");

client.on("ready", () => {
    console.log(`${client.user.tag} has logged in`);
});

client.on("messageReactionAdd", (reaction, user) => {
    const name = reaction.emoji.name;
    const member = reaction.message.guild.members.cache.get(user.id);

    if (reaction.message.id === "932685885143670896") {
        messageReaction[name] && messageReaction[name](true, member);
    }
});

client.on("messageReactionRemove", (reaction, user) => {
    const name = reaction.emoji.name;
    const member = reaction.message.guild.members.cache.get(user.id);

    if (reaction.message.id === "932685885143670896") {
        messageReaction[name] && messageReaction[name](false, member);
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
