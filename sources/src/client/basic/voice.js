const USE_3D_VOICE = true;
const USE_AUTO_VOLUME = false;
const MAX_VOICE_RANGE = 50.0;
global.isMicrophone = false;

const voiceManager = {
	listeners: [],
	addListener: (player) => {
		voiceManager.listeners.push(player);
		player.isListening = true;
		mp.events.callRemote('sendDataAddVoiceListener', player);
		if (USE_AUTO_VOLUME) {
			player.voiceAutoVolume = true;
		} else {
			player.voiceVolume = 1.0;
		}
		if (USE_3D_VOICE) {
			player.voice3d = true;
		}
	},
	removeListener: (player, notifyRemote) => {
		const index = voiceManager.listeners.indexOf(player);
		if (index !== -1) voiceManager.listeners.splice(index, 1);
		player.isListening = false;
		if (notifyRemote) {
			mp.events.callRemote('sendDataRemoveVoiceListener', player);
		}
	},
	removeAllListeners: () => {
		voiceManager.listeners.forEach((player) => {
			voiceManager.removeListener(player, true);
		});
	},
};

mp.events.add('playerQuit', (player) => {
	if (player.isListening) {
		voiceManager.removeListener(player, false);
	}
});

setInterval(() => {
	const localPlayer = mp.players.local;
	const localPos = localPlayer.position;
	mp.players.forEachInStreamRange((player) => {
		if (player !== localPlayer && !player.isListening) {
			const playerPos = player.position;
			const distance = mp.game.system.vdist(playerPos.x, playerPos.y, playerPos.z, localPos.x, localPos.y, localPos.z);
			if (distance <= MAX_VOICE_RANGE) {
				voiceManager.addListener(player);
			}
		}
	});
	voiceManager.listeners.forEach((player) => {
		if (player.handle !== 0) {
			const playerPos = player.position;
			const distance = mp.game.system.vdist(playerPos.x, playerPos.y, playerPos.z, localPos.x, localPos.y, localPos.z);
			if (distance > MAX_VOICE_RANGE) {
				voiceManager.removeListener(player, true);
			} else if (!USE_AUTO_VOLUME) {
				player.voiceVolume = 1 - (distance / MAX_VOICE_RANGE);
			}
		} else {
			voiceManager.removeListener(player, true);
		}
	});
}, 500);