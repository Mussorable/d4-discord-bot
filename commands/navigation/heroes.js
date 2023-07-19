const {
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const Heroes = require("../../models/heroes.model");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("heroes")
    .setDescription("Navigation Classes Page"),
  async execute(interaction) {
    await interaction.deferReply();

    const buttons = [];

    await Heroes.find().then((classes) =>
      classes.map((heroClass) => {
        const title = heroClass.title;

        const classButton = new ButtonBuilder()
          .setCustomId(`heroes-${heroClass._id.toString()}`)
          .setLabel(`${title}`)
          .setStyle(ButtonStyle.Primary);

        buttons.push(classButton);
      })
    );

    const row = new ActionRowBuilder().addComponents(buttons);

    await interaction.editReply({
      components: [row],
      ephemeral: true,
    });
  },
};
