import Building from '../../helpers/building';

class EmsBlip extends Building {
    constructor() {
        const info = {
            name: 'EMS',
            outPos: { x: 311.2546, y: -592.4204, z: 42.32737 },
            markerData: { radius: 0.75, color: [58, 226, 206, 85] },
            blipData: { model: 61, color: 1 },
        };
        super(info);
    }
}

new EmsBlip();