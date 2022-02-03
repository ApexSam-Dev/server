const {
    MessageEmbed, DiscordAPIError, Message
} = require("discord.js");
const DiscordMusicBot = require("../structures/DiscordMusicBot");
const client = new DiscordMusicBot();

const a = "123"
const b = "324871"
const c = "472591"
const d = "393014"
const e = "294734"

const slots = "slots"
const records = "records"

module.exports = {
    name: "whitelist",
    description: "To invite me to your server",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["whitelist", "w"],
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
        // VIEWING EMBEDS
        let ViewSlots = new MessageEmbed()
        .setTitle("MSI Whitelists")
        .setDescription(`View slots <@${message.author.id}>`)
        .addField("Format", "Name: ` Available ` | ` Used ` | ` Total `")
        .addField("Your slots", "TestSlot: ` 10 ` | ` 1 ` | ` 11 `")
        .setFooter(`${client.user.username}`)

        let ViewRecords = new MessageEmbed()
        .setTitle("MSI Whitelists")
        .setDescription(`View records <@${message.author.id}>`)
        .addField("Format", "Name [Group|User]ID `000` Status: [Suspended|Pending|Active]")
        .addField("Your records", "**TestSlot** UserID: `1695642491` Status: `Active`")
        .setFooter(`${client.user.username}`)

        let WhitelistMenu = new MessageEmbed()
        .setTitle("MSI Whitelists")
        .setDescription(`Main Menu <@${message.author.id}>`)
        .addField("Command Info", "Format: `+whitelist {section} {options & arguments}`\nExample: `+whitelist view slots`")
        .addField("Option & Argument Types", "**Brackets** `[optionA|optionB]` - Must type one of the options listed within the\nbrackets! Case example `optionA` or `optionB`\n**Braces** `{techname}` - Dynamic option, enter desired value. Case example `blizzard`\nor `satcom`")
        .addField("Sections", "**Name**: `view`\n**Options**: [slots|records]\n**Description**: Show whitelist information.\n**Example**: `+whitelist view slots`\n\n\**Name**: `create`\n**Options**: {techname} [user|group] {id}\n**Description**: Creates a new whitelist record application for the defined tech on the\ndefined user or group.\n**Example**: `+whitelist create blizzard user 123456`\n\n\**Name**: `delete`\n**Options**: {techname} [user|group] {id}\n**Description**: Removes a whitelist record of the defined tech from the defined user or\ngroup.\n\n\**Name**: `transfer`\n**Options**: {@target} {techname} {slots}\n**Description**: Permanently transfer a slot of a defined tech to another user.\n**Example**: `+whitelist transfer @user blizzard 1`")
        .setFooter(`${client.user.username}`)

        let WhitelistViewMenu = new MessageEmbed()
        .setTitle("MSI Whitelists")
        .setDescription(`View Help <@${message.author.id}>`)
        .addField("Info", "You are missing the required arguments or have provided an improper format!")
        .addField("Format", "`+whitelist view [slots|records]`")
        .addField("Examples", "`+whitelist view slots`\n`+whitelist view records`\n\n`+whitelist view [argument1]`")

        if (args[1] === slots && args[0] === "view") 
        message.channel.send(ViewSlots)
        if (args[1] === records && args[0] === "view")
        message.channel.send(ViewRecords)
        if (args[0] === "view" && !args[1])
        message.channel.send(WhitelistViewMenu)
        if (!args[0])
        message.channel.send(WhitelistMenu)
    },
};