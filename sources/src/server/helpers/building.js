export default class Building {
    constructor(data) {
        this.name = data.name;
        this.outPos = data.outPos;
        this.inPos = data.inPos;
        this.blipData = data.blipData;
        this.markerData = data.markerData;

        this.createMainEntities();
    }
    
    createMainEntities() {
        const { x, y, z } = this.outPos;

        mp.blips.new(this.blipData.model, new mp.Vector3(x, y, z), {
            name: this.name,
            shortRange: true,
            scale: 1.2,
            color: this.blipData.color,
        });
    }
}