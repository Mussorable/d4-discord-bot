const {
  SlashCommandBuilder,
  StringSelectMenuOptionBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("book")
    .setDescription("Main Menu Navigation Page"),
  async execute(interaction) {
    const select = new StringSelectMenuBuilder()
      .setCustomId("starter")
      .setPlaceholder("Choose the section you want to explore.")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Classes")
          .setDescription("All about in Diablo 4")
          .setValue("classes"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Utilities")
          .setDescription("3rd person support utilities")
          .setValue("utils"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Builds")
          .setDescription("Trending builds in Diablo 4")
          .setValue("builds")
      );

    const row = new ActionRowBuilder().addComponents(select);

    await interaction.reply({
      content: `Welcome back, ${interaction.user.username}! Select the section you are interested in.`,
      components: [row],
    });
  },
};
