const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("start")
    .setDescription("The bot starts a new private channel with you."),
  async execute(interaction) {
    if (interaction.channel.isThread()) {
      await interaction.reply("This command can only be used in a guild.");
      return;
    }

    const channel = await interaction.channel.threads.create({
      name: `Your book, ${interaction.user.username}`,
      type: 12,
      reason: "New private thread created.",
      autoArchiveDuration: 60,
      startMessage: interaction.message,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
          ],
        },
      ],
    });

    await channel.members.add(interaction.user.id);

    await interaction.reply(
      `New private thread ${channel} created for **${interaction.user.username}**!`
    );
  },
};
