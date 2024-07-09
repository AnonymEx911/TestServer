const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rage_mp'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

mp.events.add('playerJoin', (player) => {
    player.outputChatBox('Welcome to the server!');
    player.call('showAuthBrowser');
});

mp.events.add('register', (player, username, password) => {
    const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
    connection.query(query, [username, password], (err) => {
        if (err) {
            player.call('authResult', ['Registration failed.']);
            throw err;
        }
        player.call('authResult', ['Registered successfully.']);
    });
});

mp.events.add('login', (player, username, password) => {
    const query = 'SELECT * FROM users WHERE name = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            player.call('authResult', ['Logged in successfully.']);
        } else {
            player.call('authResult', ['Login failed.']);
        }
    });
});

mp.events.add('playerQuit', (player, exitType, reason) => {
    console.log(`${player.name} has left the server.`);
});

console.log('Server started...');
