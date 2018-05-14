import DamageStrategy from "./DamageStrategy";
import Stats from "./model/Stats";

export default class IgnoreArmorDamageStrategy implements DamageStrategy {
    public GetDamageDealt(attackerStats: Stats, attackedStats: Stats) {
        return attackerStats.attackPower;
    }
}