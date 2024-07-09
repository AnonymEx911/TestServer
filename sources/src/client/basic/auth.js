let sceneryCamera = mp.cameras.new('default', new mp.Vector3(-485, 1095.75, 323.85), new mp.Vector3(0,0,0), 40);

sceneryCamera.pointAtCoord(402.8664, -996.4108, -98.5);

mp.events.add('auth', () => {
    browser(true);
    callCef('authorization', '{"type": "show"}');
	mp.discord.update('Horizon RolePlay', mp.players.local.name);
	sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
});

mp.events.add('signin', (username, pass) => {
    username = username.toLowerCase();
	username = username.replace(/[^a-zA-Z0-9\s]/gi, '');
	if (username === '') {
		showCustomNotify('Логин - поле не заполнено');
		return
	}
	if (pass === '') {
		showCustomNotify('Пароль - поле не заполнено');
		return
	}

	mp.events.callRemote('sendDataToAuthorization', username, pass);
});

mp.events.add('signup', (email, loginReg, pass1, pass2, promo) => {
	if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())) {
		showCustomNotify('Email - не валидный адрес');
		return
	}
	email = email.toLowerCase();
	loginReg = loginReg.toLowerCase();
	loginReg = loginReg.replace(/[^a-zA-Z0-9\s]/gi, '');
	if (loginReg === '') {
		showCustomNotify('Логин - поле не заполнено');
		return
	}
	if (pass1 === '') {
		showCustomNotify('Пароль - поле не заполнено');
		return
	}
	if (pass1 !== pass2) {
		showCustomNotify('Пароли не совпадают');
		return
	}

	mp.events.callRemote('sendDataToRegister', email, loginReg, pass1, promo);
});

mp.events.add('Ready', () => {
	browser(false);
    callCef('authorization', '{"type": "hide"}');
	callCef('hud', JSON.stringify(
		{
			type: 'updateValues',
			district: getDistrict(),
			street: getStreet(),
			playerId: getPlayerId(),
			online: getOnline(),
		}));
	sceneryCamera.setActive(false);
    mp.game.cam.renderScriptCams(false, false, 0, true, false);
});