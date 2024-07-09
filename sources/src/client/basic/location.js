global.getDistrict = () => {
    let district = mp.game.zone.getNameOfZone(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z);
    return mp.game.ui.getLabelText(district);
}

global.getStreet = () => {
    let street = mp.game.pathfind.getStreetNameAtCoord(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, 0, 0);
    return mp.game.ui.getStreetNameFromHashKey(street.streetName);
}