module.exports = {
  Admins: ["711326167558258719", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "+", //Default prefix, Server Admins can change the prefix
  SamStudioStatus: "Yes",
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/86bkg8vf", //Support Server Link
  Token: process.env.Token || "OTM2NzE1MDczMjU3MzczNzE3.YfRN5A.dZL074crJsR6H1ofj4Y6xhe1bLA", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "933748619935363132", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "g8hFEVzbpnTz4KoGbhPP1hscL-gTukZ8", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "sdanjfsajdbjaidbajisdbajibsjiab", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/717160391905640568/921179312307195904/3dgifmaker45865.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://Redo-Premium-V2.sendcheese.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "on 1 game.", // The message shown
  },

  //Lavalink
  Lavalink: {
    id: "main",
    host: "lava.link",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "anything as a password",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};
