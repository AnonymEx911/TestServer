mp.events.add('showAuthBrowser', () => {
    const authBrowser = mp.browsers.new('package://browser/auth/index.html');
    mp.gui.cursor.show(true, true);
});
