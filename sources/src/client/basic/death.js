mp.events.add('death', () => {
    mp.gui.cursor.show(true, true);
    mp.game.ui.displayRadar(false);
    callCef('death', '{"type": "show"}');
    mp.game.cam.doScreenFadeIn(500);
});

mp.events.add('client:death:btn', (type) => {
    mp.console.logInfo(`Вывод: ${type}`);
    switch (type) {
        case 'death':
            mp.gui.cursor.show(false, false);
            mp.game.ui.displayRadar(true);
            callCef('death', '{"type": "hide"}');
            mp.events.callRemote('sendDataToDeathSpawn');
            break;
    }
});