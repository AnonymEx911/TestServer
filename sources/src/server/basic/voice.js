mp.events.add("sendDataAddVoiceListener", (player, target) => {
    if (target) {
        player.enableVoiceTo(target);
    }
});

mp.events.add("sendDataRemoveVoiceListener", (player, target) => {
    if (target) {
        player.disableVoiceTo(target);
    }
});