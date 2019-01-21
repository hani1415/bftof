const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`BlackTwo.`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == 'Bbc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#05a8f5")  
                                      .addField('تم الإرسال بنجاح :ballot_box_with_check:',"سهل")
									message.delete();
		message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('##05a8f5')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})



client.login(process.env.BOT_TOKEN);
