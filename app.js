// Discord imports
const { Client, Events, GatewayIntentBits } = require("discord.js");

// Config
const { token } = require("./config.json");

// const app = express();
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);
