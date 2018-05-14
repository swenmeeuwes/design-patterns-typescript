// PLAYGROUND

// Singleton
import LazySpriteFactory from "./singleton/LazySpriteFactory";
import SpriteType from "./singleton/SpriteType";

console.log('SINGLETON');

const circle = LazySpriteFactory.instance.create(SpriteType.Circle);
const square = LazySpriteFactory.instance.create(SpriteType.Square);

console.log('Rendering some sprites:', circle.render(), square.render());
// End of Singleton ---


// Strategy
import Entity from "./strategy/Entity";
import IgnoreArmorDamageStrategy from "./strategy/IgnoreArmorDamageStrategy";

console.log('\nSTRATEGY');

const hero = new Entity({
    health: 35,
    armor: 5,
    attackPower: 12
});

const monster = new Entity({
    health: 10,
    armor: 2,
    attackPower: 14
});

console.log(`Monster now has an hp of: ${monster.currentStats.health}.`);
hero.attack(monster);
console.log(`Monster now has an hp of: ${monster.currentStats.health}.`);

console.log(`Changing damage strategy to ignore armor.`);
hero.damageStrategy = new IgnoreArmorDamageStrategy();
hero.attack(monster);
console.log(`Monster now has an hp of: ${monster.currentStats.health}.`);
// End of Strategy ---