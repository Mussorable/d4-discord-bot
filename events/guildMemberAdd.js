const { Events } = require("discord.js");

const { globalChannel } = require("../config.json");

module.exports = {
  name: Events.GuildMemberAdd,
  async execute(member) {
    try {
      await member.guild.channels.cache
        .get(globalChannel)
        .send(
          `Welcome, ${member.displayName} "The Magic Book" is a Discord Bot that provides you with comprehensive information about Diablo 4, including guides, websites, builds, and more.`
        );
    } catch (error) {
      console.log(error);
    }
  },
};
