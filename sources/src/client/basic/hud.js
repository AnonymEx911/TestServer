mp.events.add('client:user:showCustomHud', () => {
    callCef('hud', '{"type": "show"}');
    setInterval(() => {
        callCef('hud', JSON.stringify(
            {
                type: 'updateValues',
                district: getDistrict(),
                street: getStreet(),
                playerId: getPlayerId(),
                online: getOnline(),
            }
        ));
    }, 5000);
});

global.getPlayerId = () => {
    return mp.players.local.id;
}

global.getOnline = () => {
    return mp.players.length;
}