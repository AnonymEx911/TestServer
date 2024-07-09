const mp = require('rage-mp');

mp.events.add('playerJoin', (player) => {
  player.outputChatBox('Welcome to the server!');
});

mp.events.add('playerQuit', (player, exitType, reason) => {
  console.log(`${player.name} has left the server.`);
});

console.log('Server started...');
