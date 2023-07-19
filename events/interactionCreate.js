const {
  Events,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

const Heroes = require("../models/heroes.model");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);

      if (!command) {
        console.error(
          `No command matching ${interaction.commandName} was found.`
        );
        return;
      }

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(`Error executing ${interaction.commandName}`);
        console.error(error);
      }
    } else if (interaction.isButton()) {
      const buttonFullName = interaction.customId.split("-");
      const commandName = buttonFullName[0];
      const buttonName = buttonFullName[1];

      if (commandName === "heroes") {
        Heroes.findById(buttonName).then((hero) => {
          const buildsButton = new ButtonBuilder()
            .setLabel(`${hero.title} builds`)
            .setStyle(ButtonStyle.Link)
            .setURL(
              `https://maxroll.gg/d4/build-guides?filter[classes][taxonomy]=taxonomies.classes&filter[classes][value]=d4-${hero.title.toLowerCase()}`
            );

          const row = new ActionRowBuilder().addComponents(buildsButton);

          return interaction.reply({
            content:
              "**MAXROLL.GG** - Diablo 4 Leveling & Endgame Build Guides, D4planner, Tier Lists, Resources, Items, Nightmare Dungeons, World Bosses, Maps, and much more!",
            components: [row],
          });
        });
      }
    } else if (interaction.isStringSelectMenu()) {
      const command = interaction.client.commands.get(interaction.values[0]);

      if (!command) {
        throw new Error("Command is not found!");
      }

      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(`Error executing ${interaction.commandName}`);
        console.error(error);
      }
    }
  },
};
