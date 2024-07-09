mp.events.add('playerJoin', (player) => {
  player.outputChatBox('Welcome to the server!');
  player.call('showAuthBrowser');
});

mp.events.add('playerQuit', (player, exitType, reason) => {
  console.log(`${player.name} has left the server.`);
});

console.log('Server started...');

