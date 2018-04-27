const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDM5NDE1NDcyMTgyNTI1OTUz.DcS1JQ.PJX10IzpUJAyQ2tjW5jY7B9kcfg';

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
   client.user.setStatus("dnd");
  client.user.setGame(`in ${client.guilds.size} servere | -help`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`:hugging: Bun venit în comunitatea **WHART**, ${member}!
:white_small_square: Ținând cont că ești o persoană nou venită pe serverul nostru, și dorim să te simti cat mai bine. 
Ne para rau ca nu avem cel mai bun bot sau cel mai bun staff dar o sa ne dezvoltam pe parcurs. 
Te rog uita-te pe **index** o sa te ajute destul de mult`);
});

client.login('NDM5NDE1NDcyMTgyNTI1OTUz.DcS1JQ.PJX10IzpUJAyQ2tjW5jY7B9kcfg';
