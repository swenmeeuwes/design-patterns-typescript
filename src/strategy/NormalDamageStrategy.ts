import DamageStrategy from "./DamageStrategy";
import Stats from "./model/Stats";

export default class NormalDamageStrategy implements DamageStrategy {
    public GetDamageDealt(attackerStats: Stats, attackedStats: Stats) {
        let damageDealt = attackerStats.attackPower - attackedStats.armor;
        if (damageDealt < 0)
            damageDealt = 0;

        return damageDealt;
    }
}