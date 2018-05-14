import Stats from "./model/Stats";

export default interface DamageStrategy {
    GetDamageDealt(attackerStats: Stats, attackedStats: Stats): number;
}