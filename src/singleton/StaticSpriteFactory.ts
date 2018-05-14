import SpriteType from "./SpriteType";
import Sprite from "./Sprite";

/**
 * An implementation of a 'static singleton'.
 * Static meaning that it will instantiate itself directly when the program is ran.
 */
export default class StaticSpriteFactory {
    // Provide a global point of access for the singleton
    public static instance: StaticSpriteFactory = new StaticSpriteFactory();

    public create(type: SpriteType) {
        switch (type) {
            case SpriteType.Circle:
                // Create a ... 'Circle'
                return new Sprite('Circle');
            case SpriteType.Square:
                // Create a ... 'Square'
                return new Sprite('Square');
            default:
                throw `[StaticSpriteFactory] The creation of sprite type '${type}' is not implemented`;
        }
    }

    // Make the constructor private so we enforce a single instance
    private constructor() { };
}