mp.events.addCommand('veh', (player, model) => {
    if (player.data.adminlvl > 0) {
        mp.vehicles.new(mp.joaat(model), new mp.Vector3(player.position.x, player.position.y, player.position.z));
    }
});

mp.events.addCommand('repair', (player) => {
    if (player.data.adminlvl > 0) {
        if (player.vehicle) {
            player.vehicle.repair();
        }
    }
});

mp.events.addCommand('delveh', (player) => {
    if (player.data.adminlvl > 0) {
        if (player.vehicle) {
            player.vehicle.destroy();
        }
    }
});

mp.events.addCommand('tpc', (player, _, x, y, z) => {
    if (player.data.adminlvl > 0) {
        player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
    }
})

mp.events.addCommand('time', (player, hour, minute, second) => {
    if (player.data.adminlvl > 0) {
        mp.world.time.set(hour, minute, second);
    }
});