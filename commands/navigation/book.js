const {
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("book")
    .setDescription("Main Menu Navigation Page"),
  async execute(interaction) {
    const classesButton = new ButtonBuilder()
      .setCustomId("classesButton")
      .setLabel("Classes")
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(classesButton);

    await interaction.reply({
      content: "-- MENU --",
      components: [row],
    });
  },
};
