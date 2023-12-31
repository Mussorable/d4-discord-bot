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
    if (interaction.channel.isThread() === false) {
      await interaction.reply(
        "This command can only be used in a private thread."
      );
      return;
    }

    const select = new StringSelectMenuBuilder()
      .setCustomId("starter")
      .setPlaceholder("Choose the section you want to explore.")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Classes")
          .setDescription("Classes in Diablo 4")
          .setValue("heroes"),
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
