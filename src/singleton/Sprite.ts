// Class to mock a sprite
export default class Sprite {
    private _appearance: string; // Mock appearance

    constructor(appearance: string) {
        this._appearance = appearance;
    }

    public render() {
        return `Rendering a ${this._appearance}`;
    }
}