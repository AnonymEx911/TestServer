mp.events.add('client:user:showCustomNotify', (text, style, layout, time) => {
    showCustomNotify(text, style, layout, time);
});

global.showCustomNotify = (text, style = 0, layout = 5, time = 5000) => {
    mp.game.audio.playSoundFrontend(-1, "Boss_Blipped", "GTAO_Magnate_Hunt_Boss_SoundSet", false);
    callCef('notify', JSON.stringify({type: style, layout: layout, text: text, time: time}));
};