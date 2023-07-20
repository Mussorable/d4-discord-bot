const { Events } = require("discord.js");

const { globalChannel } = require("../config.json");

module.exports = {
  name: Events.TypingStart,
  async execute(member) {
    try {
      await member.guild.channels.cache
        .get(globalChannel)
        .send(
          `Write "/book" to explore the book or "/help" to access the main commands and get started throughout the bot's functionalities.`
        );
    } catch (error) {
      console.error(error);
    }
  },
};
