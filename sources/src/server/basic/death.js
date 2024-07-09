mp.events.add('playerDeath', (player) => {
    player.call('death');
});

mp.events.add('sendDataToDeathSpawn', (player) => {
    player.spawn(new mp.Vector3(315.63, -582.20, 43.28));
    player.health = 50;
});