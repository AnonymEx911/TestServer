const interiorId = mp.game.interior.getInteriorAtCoords(311.2546, -592.4204, 42.32737);

const ipls = [
	'rc12b_fixed',
	'rc12b_destroyed',
	'rc12b_default',
	'rc12b_hospitalinterior_lod',
	'rc12b_hospitalinterior'
];

mp.game.streaming.requestIpl('gabz_pillbox_milo_');

ipls.forEach(
	(ipl) => mp.game.streaming.isIplActive(ipl) && mp.game.streaming.removeIpl(ipl)
);

mp.game.interior.enableInteriorProp(interiorId, 'gabz_pillbox_milo_');
mp.game.interior.refreshInterior(interiorId);