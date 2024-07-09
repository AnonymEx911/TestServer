mp.gui.execute("window.location = 'package://chat/index.html'");

mp.events.add('Send_ToChat', (player, message) =>{
    mp.gui.chat.push(`${player.name}[${player.id}]: ${message}`);
});