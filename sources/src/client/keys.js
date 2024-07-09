mp.keys.bind(192, false, () => {
    mp.gui.cursor.visible = !mp.gui.cursor.visible;
});

let hudHidden = false;

mp.keys.bind(48, false, () => {
    if (hudHidden) {
        callCef('hud', '{"type": "show"}');
        hudHidden = false;
    } else {
        callCef('hud', '{"type": "hide"}');
        hudHidden = true;
    }
});

mp.keys.bind(50, false, () => {
    if (mp.players.local.vehicle) {
        if (mp.players.local.vehicle.getIsEngineRunning()) {
            mp.players.local.vehicle.setEngineOn(false, true, true);
        } else {
            mp.players.local.vehicle.setEngineOn(true, true, true);
        }
    }
});

mp.keys.bind(90, true, () => {
	mp.voiceChat.muted = false;
    showCustomNotify('Микрофон включен');
	isMicrophone = true;
	mp.players.local.playFacialAnim('mic_chatter', 'mp_facial');
});

mp.keys.bind(90, false, () => {
	mp.voiceChat.muted = true;
    showCustomNotify('Микрофон выключен');
	isMicrophone = false;
	mp.players.local.playFacialAnim('mood_normal_1', 'facials@gen_male@variations@normal');
});