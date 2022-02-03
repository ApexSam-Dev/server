const { MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "help",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let Embed = new MessageEmbed()
    .setTitle("Code 5 Development - Help")
    .setDescription(`Information on commands <@${message.author.id}>`)
    .addField("Account Management", "Register an account:\n`+link`\nView your account details:\n`+account`")
    .setColor("YELLOW")
    .setTimestamp()
    .setFooter("Code 5 Development")
    .addField("Product Management", "Redeem a product key `+redeem {productkey}`")
    .addField("Whitelist Management", "Please use the `+whitelist` command for help\n with whitelist management.")
    .addField("Additional Information", "[Roblox Group](https://www.roblox.com/groups/10563074/Code-5-Development#!/about)\n[Discord Server](https://discord.gg/6mUTHe3ZJe)")
    message.channel.send(Embed);
    }
  };