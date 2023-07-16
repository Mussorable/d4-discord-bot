const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    try {
      console.log("+");
      await member.guild.channels.cache
        .get("1129812846994276416")
        .send("Welcome");
    } catch (error) {
      console.log(error);
    }
  },
};
