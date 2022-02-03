const {
    MessageEmbed, DiscordAPIError
} = require("discord.js");
const DiscordMusicBot = require("../structures/DiscordMusicBot");
const client = new DiscordMusicBot();

const key1 = "mH8W0Wzws6BUGsbH5Peo"
const key2 = "rB3mgG396ntDW6CYkSzs"
const key3 = "ivgU8AfLjkctMUrA22rF"
const key4 = "Yf3Yz0u733uW28xlDmkH"
const key5 = "lnJwcBFvGbBRtUnExO2y"
const key6 = "sV117hSMCRBMpVNHxAbG"
const key7 = "123"

module.exports = {
    name: "product",
    description: "To invite me to your server",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["redeem"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, {
        GuildDB
    }) => {
        var channel = client.channels.cache.get("938852971582726184")

        if (message.content.includes(key7 || key1 || key2 || key3 || key4 || key5 || key6) === true) {
            message.channel.send("Success!")
            } else if (message.content.includes(key7 || key1 || key2 || key3 || key4 || key5 || key6) === false)
            return message.channel.send("The system has detected you have either not supplied a product key or valid product key.\nExample: `+redeem XXX5XXX`"), 
            message.channel.send("If you think this issue persists contact our 24/7 support team by using `+support account`.")

        if (args[0] === key1) 
        message.channel.send("You have successfully claimed product `TEMP` with product key `mH8W0Wzws6BUGsbH5Peo`") && channel.send("Product key containg `1` slots, was claimed for user <@" + message.author.id + "> by user <@" + message.author.id + ">. CODE: `" + key1 + "`")
        if (args[0] === key2)
        message.channel.send("You have successfully claimed product `TEMP` with product key `rB3mgG396ntDW6CYkSzs`") && channel.send("Product key containg `1` slots, was claimed for user <@" + message.author.id + "> by user <@" + message.author.id + ">. CODE: `" + key2+ "`")
        if (args[0] === key3)
        message.channel.send("You have successfully claimed product `TEMP` with product key `ivgU8AfLjkctMUrA22rF`") && channel.send("Product key containg `1` slots, was claimed for user <@" + message.author.id + "> by user <@" + message.author.id + ">. CODE: `" + key3 + "`")
        if (args[0] === key4)
        message.channel.send("You have successfully claimed product `TEMP` with product key `Yf3Yz0u733uW28xlDmkH`") && channel.send("Product key containg `1` slots, was claimed for user <@" + message.author.id + "> by user <@" + message.author.id + ">. CODE: `" + key4 + "`")
        if (args[0] === key5)  
        message.channel.send("You have successfully claimed product `TEMP` with product key `lnJwcBFvGbBRtUnExO2y`") && channel.send("Product key containg `1` slots, was claimed for user <@" + message.author.id + "> by user <@" + message.author.id + ">. CODE: `" + key5 + "`")
        if (args[0] === key6) 
        message.channel.send("You have successfully claimed product `TEMP` with product key `sV117hSMCRBMpVNHxAbG`") && channel.send("Product key containg `1` slots, was claimed for user <@" + message.author.id + "> by user <@" + message.author.id + ">. CODE: `" + key6 + "`")
        if (args[0] === key7) 
        message.channel.send("You have successfully claimed product `TEMP` with product key `123`")  && channel.send("Product key containg `1` slots, was claimed for user <@" + message.author.id + "> by user <@" + message.author.id + ">. CODE: `" + key7 + "`")
    },
};