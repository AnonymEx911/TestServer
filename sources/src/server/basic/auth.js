import methods from '../utils/methods';

mp.events.add('playerReady', (player) => {
    player.call('auth');
    player.dimension = 0;
});

mp.events.add('sendDataToAuthorization', (player, username, pass) => {
    methods.info('Вывод данных при авторизации:', username, pass);
    database.query(`SELECT * FROM accounts WHERE login = ? AND password = ?`, [username, pass], (err, rows) => {
        if(err) {
            methods.error('Ошибка:', err);
        } else {
            if(rows.length > 0) {
                methods.done('Аккаунт успешно прошел верификацию.');
                player.data.adminlvl = rows[0].adminlvl;
                player.call('Ready');
                player.call('client:user:showCustomHud');
            } else {
                showCustomNotify(player, 'Неверный логин или пароль.', 1);
            }
        }
    });
});

mp.events.add('sendDataToRegister', (player, email, loginReg, pass1, promo) => {
    methods.info('Вывод данных при регистрации:', email, loginReg, pass1, promo);
    database.query('SELECT * FROM accounts WHERE socialClub = ?', [player.socialClub], (err, result) => {
        if (err) {
            methods.error('Ошибка при проверке существования аккаунта:', err);
        } else {
            if (result.length > 0) {
                showCustomNotify(player, 'У вас уже есть аккаунт.', 1);
            } else {
                database.query('INSERT INTO accounts (socialClub, email, login, password, promo, adminlvl) VALUES (?, ?, ?, ?, ?, 0)', [player.socialClub, email, loginReg, pass1, promo], (err, result) => {
                    if (err) {
                        methods.error('Ошибка при регистрации:', err);
                    } else {
                        methods.done('Пользователь успешно зарегистрирован.');
                        showCustomNotify(player, 'Вы успешно зарегистрированы.', 1);
                        player.position = new mp.Vector3(-1036.72, -2732.11, 13.76);
                        player.heading = 326.25;
                        player.call('Ready');
                    }
                });
            }
        }
    });
});