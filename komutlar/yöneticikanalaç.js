const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
        message.guild.createChannel(`mod-log`, 'text');
        message.guild.createChannel(`ceza-tekip-listesi`, 'text');
        message.guild.createChannel(`yetki-başvurusu`, 'text');
        message.guild.createChannel(`⚠kurallar⚠`, 'text');
        message.guild.createChannel(`duyuru`, 'text');
        message.guild.createChannel(`komutlar-botlars`, 'text');

        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'yöneticikanalaç',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'yöneticikanalaç'
};