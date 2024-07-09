global.browser = (value) => {
    if(value) {
        mp.gui.cursor.show(true, true)
        mp.gui.chat.activate(false);
        mp.gui.chat.show(false);
        mp.game.ui.displayRadar(false);
    } else {
        mp.gui.chat.activate(true);
        mp.gui.chat.show(true);
        mp.gui.cursor.show(false, false);
        mp.game.ui.displayRadar(true);
    }
}