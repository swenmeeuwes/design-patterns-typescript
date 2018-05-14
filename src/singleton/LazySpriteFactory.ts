import SpriteType from "./SpriteType";
import Sprite from "./Sprite";

/**
 * An implementation of a 'lazy singleton'.
 * Lazy meaning that it will instantiate itself when needed for the first time.
 */
export default class LazySpriteFactory {
    private static _instance: LazySpriteFactory;

    // Provide a global point of access for the singleton
    public static get instance() {
        return this._instance || (this._instance = new LazySpriteFactory());
    }

    public create(type: SpriteType) {
        switch (type) {
            case SpriteType.Circle:
                // Create a ... 'Circle'
                return new Sprite('Circle');
            case SpriteType.Square:
                // Create a ... 'Square'
                return new Sprite('Square');
            default:
                throw `[LazySpriteFactory] The creation of sprite type '${type}' is not implemented`;
        }
    }

    // Make the constructor private so we enforce a single instance
    private constructor() { };
}