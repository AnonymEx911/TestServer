mp.events.add('showAuthBrowser', () => {
    const authBrowser = mp.browsers.new('http://localhost:3000');
    authBrowser.execute(`mp.gui.cursor.show(true, true);`);
});
