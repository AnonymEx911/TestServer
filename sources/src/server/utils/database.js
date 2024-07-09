import mysql from 'mysql';
import methods from './methods';

global.database = mysql.createConnection({
    host: mp.config.database.host,
    user: mp.config.database.user,
    password: mp.config.database.password,
    database: mp.config.database.name
});

database.connect((err) => {
    if(err) {
        methods.error('Ошибка:', err);
    } else {
        methods.done('База данных успешно подключена.');
    }
});