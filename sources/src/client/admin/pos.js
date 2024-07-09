mp.events.add('render', () => {
    if (mp.players.local.getVariable('adminlvl') > 1) {
        const heading = mp.players.local.getHeading();

        mp.game.graphics.drawText(`x: ${mp.players.local.position.x.toFixed(2)}, y: ${mp.players.local.position.y.toFixed(2)}, z: ${mp.players.local.position.z.toFixed(2)}, h: ${heading.toFixed(2)}`, [0.55, 0.965],  { //надпись самих кординатов
            font: 0, // Шрифт
            color: [255, 255, 255, 230],
            scale: [0.4, 0.4],
            outline: true
        });
    }
});