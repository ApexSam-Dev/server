const {
  MessageEmbed,
  MessageReaction
} = require("discord.js");
const {
  SamStudioStatus
} = require("../botconfig");

module.exports = {
  name: "account",
  description: "To invite me to your server",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["a"],
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
    let SamEmbed = new MessageEmbed()
      .setTitle("Account Information")
      .setDescription("User account information.")
      .addField(
        "Account Details",
        "ID: `1`\nRoblox: [FireManGuy4321](https://www.roblox.com/users/1695642491)\nDiscord: <@711326167558258719>\nAccount Level: `Owner`\nAffiliation: `Code 5 Development`"
      )
      .addField(
        "Account Status",
        "Authorized: `Yes` \nStudio: `" + SamStudioStatus + "`\nSuspended: `No`"
      )
      .setFooter("Code 5 Development")
      .setThumbnail(
        "https://images-ext-2.discordapp.net/external/FbRxp_afw9x6HFDf3DQPzwObauot313tNXsE0omGDTw/https/tr.rbxcdn.com/80b74c4d9d38fb0f38515b0a91061aa8/60/60/AvatarHeadshot/Png/isCircular"
      )
      .setColor("00ff18")
      .setTimestamp();

    let AmazonBox = new MessageEmbed()
      .setTitle("Account Information")
      .setDescription("User account information.")
      .addField(
        "Account Details",
        "ID: `2`\nRoblox: [rcmp168](https://www.roblox.com/users/172719024/profile)\nDiscord: <@473994781790306305>\nAccount Level: `Server Administration`\nAffiliation: `Code 5 Development`"
      )
      .addField(
        "Account Status",
        "Authorized: `Yes` \nStudio: No\nSuspended: `No`"
      )
      .setFooter("Code 5 Development")
      .setThumbnail(
        "https://images-ext-2.discordapp.net/external/FbRxp_afw9x6HFDf3DQPzwObauot313tNXsE0omGDTw/https://tr.rbxcdn.com/f0e2229592a6c6aa7c82552cd40d48e5/150/150/AvatarHeadshot/Png/isCircular"
      )
      .setColor("YELLOW")
      .setTimestamp();

      let RBLXNOAHEmbed = new MessageEmbed()
      .setTitle("Account Information")
      .setDescription("User account information.")
      .addField(
        "Account Details",
        "ID: `3`\nRoblox: [RBLX_NOAH](https://www.roblox.com/users/1382999596/profile)\nDiscord: <@787305964184666113>\nAccount Level: `Security Response Officer`\nAffiliation: `Code 5 Development`"
      )
      .addField(
        "Account Status",
        "Authorized: `Yes` \nStudio: No\nSuspended: `No`"
      )
      .setFooter("Code 5 Development")
      .setThumbnail(
        "https://images-ext-2.discordapp.net/external/FbRxp_afw9x6HFDf3DQPzwObauot313tNXsE0omGDTw/https://tr.rbxcdn.com/fce1e98f1d35cb01d32c9138d16841ff/150/150/AvatarHeadshot/Png/isCircular"
      )
      .setColor("YELLOW")
      .setTimestamp();

      let RBLX_VZBEZ = new MessageEmbed()
      .setTitle("Account Information")
      .setDescription("User account information.")
      .addField(
        "Account Details",
        "ID: `4`\nRoblox: [RBLX_VZBEZ](https://www.roblox.com/users/1593775035/profile)\nDiscord: <@786036384392675389>\nAccount Level: `Development Staff`\nAffiliation: `Code 5 Development`"
      )
      .addField(
        "Account Status",
        "Authorized: `Yes` \nStudio: No\nSuspended: `No`"
      )
      .setFooter("Code 5 Development")
      .setThumbnail(
        "https://images-ext-2.discordapp.net/external/FbRxp_afw9x6HFDf3DQPzwObauot313tNXsE0omGDTw/https://tr.rbxcdn.com/ef74e0606fbd195c3c8dd842ce4c3315/150/150/AvatarHeadshot/Png/isCircular"
      )
      .setColor("YELLOW")
      .setTimestamp();

      let UrVibezz = new MessageEmbed()
      .setTitle("Account Information")
      .setDescription("User account information.")
      .addField(
        "Account Details",
        "ID: `5`\nRoblox: [master0roblox](https://www.roblox.com/users/130727709/profile)\nDiscord: <@730166134623567912>\nAccount Level: `Development Staff`\nAffiliation: `Code 5 Development`"
      )
      .addField(
        "Account Status",
        "Authorized: `Yes` \nStudio: No\nSuspended: `No`"
      )
      .setFooter("Code 5 Development")
      .setThumbnail(
        ""
      )
      .setColor("YELLOW")
      .setTimestamp();

      let Dubz = new MessageEmbed()
      .setTitle("Account Information")
      .setDescription("User account information.")
      .addField(
        "Account Details",
        "ID: `6`\nRoblox: [PaceyChelsea45](https://www.roblox.com/users/441105552/profile)\nDiscord: <@164317905326964736>\nAccount Level: `Development Staff`\nAffiliation: `Code 5 Development`"
      )
      .addField(
        "Account Status",
        "Authorized: `Yes` \nStudio: No\nSuspended: `No`"
      )
      .setFooter("Code 5 Development")
      .setThumbnail(
        "https://images-ext-2.discordapp.net/external/FbRxp_afw9x6HFDf3DQPzwObauot313tNXsE0omGDTw/https://tr.rbxcdn.com/07d8286b222809b64c6b98d1b29bf508/150/150/AvatarHeadshot/Png/isCircular"
      )
      .setColor("YELLOW")
      .setTimestamp();


    if (message.author.id === "711326167558258719") {
      return message.channel.send(SamEmbed)
    } else if (message.author.id === "473994781790306305") {
      return message.channel.send(AmazonBox)
    } else if (message.author.id === "787305964184666113") {
      return message.channel.send(RBLXNOAHEmbed)
    } else if (message.author.id === "786036384392675389") {
      return message.channel.send(RBLX_VZBEZ)
    } else if (message.author.id === "730166134623567912") {
      return message.channel.send(UrVibezz)
    } else if (message.author.id === "164317905326964736")
      return message.channel.send(Dubz)
  },
};