try {
    require('./client');
} catch (e) {
    mp.game.graphics.notify(`${e.toString()}`);
}