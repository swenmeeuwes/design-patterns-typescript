import LazySpriteFactory from "./singleton/LazySpriteFactory";
import SpriteType from "./singleton/SpriteType";

// Design pattern playground (should be done via tests)

// Singleton
const circle = LazySpriteFactory.instance.create(SpriteType.Circle);
const square = LazySpriteFactory.instance.create(SpriteType.Square);

console.log('Rendering some sprites:', circle.render(), square.render());
// ---