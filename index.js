const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    var str = String(message.content).toLowerCase();

    var options = ['doit.mp3','no.mp3','spin.mp3','senate.mp3','unlimited.mp3','rage.mp3','know.mp3','good.mp3']; 

    function sheev(n)
    {
        message.member.voiceChannel.join().then(connection => {return connection.playFile(options[n]).on("end", () => {
            connection.disconnect();});
        }); 
    }
    
    if (str.includes('i shouldnt')){sheev(0);}

    else if (str.includes('should')){sheev(Math.floor(2*Math.random()));}

    else if (str.includes('treason')){sheev(2);}

    else if (str.includes('senate')){sheev(3);}

    else if (str.includes('power')){sheev(4);}

    else if (str.includes('iv')){sheev(4);}

    else if (str.includes('vi')){sheev(4);}

    else if (str.includes('rage')){sheev(5);}

    else if (str.includes('did you know')){sheev(6);} 

    else if (str.includes('good')){sheev(7);} 

});
