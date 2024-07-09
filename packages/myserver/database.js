const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

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

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client_packages', 'browser', 'auth')));

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
    connection.query(query, [username, password], (err) => {
        if (err) {
            res.json({ message: 'Registration failed.' });
            throw err;
        }
        res.json({ message: 'Registered successfully.' });
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE name = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ message: 'Logged in successfully.' });
        } else {
            res.json({ message: 'Login failed.' });
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client_packages', 'browser', 'auth', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
