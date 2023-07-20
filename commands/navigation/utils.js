const {
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("utils")
    .setDescription("Navigation Utils Page"),
  async execute(interaction) {
    if (interaction.channel.isThread() === false) {
      await interaction.reply(
        "This command can only be used in a private thread."
      );
      return;
    }

    await interaction.deferReply();

    const interactiveMap = new ButtonBuilder()
      .setLabel("Interactive map")
      .setStyle(ButtonStyle.Link)
      .setURL("https://mapgenie.io/diablo-4");

    const row = new ActionRowBuilder().addComponents(interactiveMap);

    await interaction.channel.send(
      "**MAPGENIE.IO** - interactive online map with aspects list/zone events/helltide mystery chests/spawn timers/altars of Lilith/Unique items"
    );

    await interaction.editReply({
      components: [row],
      ephemeral: true,
    });
  },
};
