const {
    MessageEmbed, DiscordAPIError
} = require("discord.js");
const DiscordMusicBot = require("../structures/DiscordMusicBot");
const client = new DiscordMusicBot();

const a = "705855"
const b = "324871"
const c = "472591"
const d = "393014"
const e = "294734"
const f = "240149"
const g = "253282"
const h = "540294"
const i = "189195"
const j = "774873"
const k = "507544"
const l = "465171"
const m = "776375"
const n = "300504"
const o = "843981"
const p = "066477"


module.exports = {
    name: "link",
    description: "To invite me to your server",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["link"],
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
        let LinkEmbed = new MessageEmbed()
        .setTitle("Account Link - Help")
        .setDescription("Getting your account started")
        .addField("Welcome", "If you already know your link code, please use the command `+link {code}`\nExample: `+link 123456`\nIf you do not have a link code, please follow our step by step guide below.")
        .addField("Step by step instructions", "Step 1: Please ensure you have joined the [Group](https://www.roblox.com/groups/10563074/Code-5-Development#!/about) it is required!\nStep 2: Please proceed to the [Link Game](https://www.roblox.com/games/8712858822/Link-Game)\nStep 3: Once in game click the `Check Account` button.\nStep 4: Please click the `New Code` button.\nStep 5: Please enter the discord bot command `+link {code}`\nExample: `+link 123456`")
        .setColor("YELLOW")

        let ACompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + a + ``)
        .setColor("GREEN")

        let BCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + b + ``)
        .setColor("GREEN")

        let CCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + c + ``)
        .setColor("GREEN")

        let DCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + d + ``)
        .setColor("GREEN")

        let ECompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + e + ``)
        .setColor("GREEN")

        let FCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + f + ``)
        .setColor("GREEN")

        let GCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + g + ``)
        .setColor("GREEN")

        let HCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + h + ``)
        .setColor("GREEN")

        let ICompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + i + ``)
        .setColor("GREEN")

        let JCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + j + ``)
        .setColor("GREEN")

        let KCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + k + ``)
        .setColor("GREEN")

        let LCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + l + ``)
        .setColor("GREEN")

        let MCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + m + ``)
        .setColor("GREEN")

        let NCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + n + ``)
        .setColor("GREEN")

        let OCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + o + ``)
        .setColor("GREEN")

        let PCompleteLink = new MessageEmbed()
        .setTitle("Account Link - Success!")
        .addField("Status", "Link was sucessful!")
        .addField("Link Message", `Discord ID ${message.author.id} attached to user with code ` + p + ``)
        .setColor("GREEN")

        var channel = client.channels.cache.get("938852971582726184")

        if (args[0] === a) 
        message.channel.send(ACompleteLink) && channel.send("Linked Account with code `" + a + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + a + "`")
        if (args[0] === b)  
        message.channel.send(BCompleteLink) && channel.send("Linked Account with code `" + b + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + b + "`")
        if (args[0] === c)
        message.channel.send(CCompleteLink) && channel.send("Linked Account with code `" + c + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + c + "`")
        if (args[0] === d)
        message.channel.send(DCompleteLink) && channel.send("Linked Account with code `" + d + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + d + "`")
        if (args[0] === e) 
        message.channel.send(ECompleteLink) && channel.send("Linked Account with code `" + e + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + e + "`")
        if (args[0] === f) 
        message.channel.send(FCompleteLink) && channel.send("Linked Account with code `" + f + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + f + "`")
        if (args[0] === g) 
        message.channel.send(GCompleteLink) && channel.send("Linked Account with code `" + g + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + g + "`")
        if (args[0] === h) 
        message.channel.send(HCompleteLink) && channel.send("Linked Account with code `" + h + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + h + "`")
        if (args[0] === i) 
        message.channel.send(ICompleteLink) && channel.send("Linked Account with code `" + i + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + i + "`")
        if (args[0] === j) 
        message.channel.send(JCompleteLink) && channel.send("Linked Account with code `" + j + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + j + "`")
        if (args[0] === k) 
        message.channel.send(KCompleteLink) && channel.send("Linked Account with code `" + k + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + k + "`")
        if (args[0] === l) 
        message.channel.send(LCompleteLink) && channel.send("Linked Account with code `" + l + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + l + "`")
        if (args[0] === m) 
        message.channel.send(MCompleteLink) && channel.send("Linked Account with code `" + m + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + m + "`")
        if (args[0] === n) 
        message.channel.send(NCompleteLink) && channel.send("Linked Account with code `" + n + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + n + "`")
        if (args[0] === o) 
        message.channel.send(OCompleteLink) && channel.send("Linked Account with code `" + o + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + o + "`")
        if (args[0] === p) 
        message.channel.send(PCompleteLink) && channel.send("Linked Account with code `" + p + "`, containing `1` user, was claimed by user <@" + message.author.id + "> for user <@" + message.author.id + ">. CODE: `" + p + "`")
        if (!args[0]) 
        message.channel.send(LinkEmbed)
       
    },
};