global.showCustomNotify = (player, text, style = 0, layout = 5, time = 5000) => {
    player.call('client:user:showCustomNotify', [text, style, layout, time]);
};