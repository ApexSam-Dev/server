const {
    MessageEmbed, Message
} = require("discord.js");

var callNumber = 0;
var callID = 0;

module.exports = {
    name: "support",
    description: "To invite me to your server",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["s"],
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
        let SupportEmbed = new MessageEmbed()
        .setTitle("Support Call Help")
        .setDescription("You musut provide a valid support category and include a brief description of your issue / request! Do note all of the categories are case sensitive!")
        .addField("Example", "support {category} {description}\n\nsupport account I wish to have a new account made for me to use the product I purchased.")
        .addField("Categories", "`Account` (New/Modify/Group join)\n`Whitelist` (Not for pending whitelists)\n`Install` (Tech support)\n`Fraud` (Open Fraud Case)\n`Business` (Order Whitelisting Services)")
        .setTimestamp()

        const MyMessage = message.content.slice(12).trim(5);

        let CallEmbed = new MessageEmbed()
        .setTitle("Support Call")
        .setDescription(args[0])
        .setColor("YELLOW")
        .addField("Call Description", `User says: ` + MyMessage + ``)
        .addField("Support Status", "Call ID: `" + callNumber + "`\nCall Status: `OPEN`")
        .addField("Supervisors", "OPEN (Upon request)")
        .addField("Representatives", `<@${message.author.id}>`)
        .setFooter("Support call system")
        .setTimestamp()

        var channel = client.channels.cache.get("912798682951352360")
        // message.channel.send("Your support call number is: `" + callNumber++ + "`, a rep will contact you in direct messages shortly. Make sure you have direct messages from Polarstar enabled!")
        if (args[0] === "account") 
        message.channel.send("Your support call number is: `" + callNumber++ + "`, a rep will contact you in direct messages shortly. Make sure you have direct messages from Polarstar enabled!"), channel.send("<@&912024115941109781>"), channel.send(CallEmbed)
        if (args[0] === "whitelist")
        message.channel.send("Your support call number is: `" + callNumber++ + "`, a rep will contact you in direct messages shortly. Make sure you have direct messages from Polarstar enabled!"), channel.send("<@&912024115941109781>"), channel.send(CallEmbed)
        if (args[0] === "install")
        message.channel.send("Your support call number is: `" + callNumber++ + "`, a rep will contact you in direct messages shortly. Make sure you have direct messages from Polarstar enabled!"), channel.send("<@&912024115941109781>"), channel.send(CallEmbed)
        if (args[0] === "fraud")
        message.channel.send("Your support call number is: `" + callNumber++ + "`, a rep will contact you in direct messages shortly. Make sure you have direct messages from Polarstar enabled!"), channel.send("<@&912024115941109781>"), channel.send(CallEmbed)
        if (args[0] === "business") 
        message.channel.send("Your support call number is: `" + callNumber++ + "`, a rep will contact you in direct messages shortly. Make sure you have direct messages from Polarstar enabled!"), channel.send("<@&912024115941109781>"), channel.send(CallEmbed)
        if (!args[0]) 
        message.channel.send(SupportEmbed)
    },
};