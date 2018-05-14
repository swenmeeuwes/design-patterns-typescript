import DamageStrategy from "./DamageStrategy";
import NormalDamageStrategy from "./NormalDamageStrategy";
import Stats from "./model/Stats";

export default class Entity {
    private _initialStats: Stats;
    private _currentStats: Stats;
    private _damageStrategy: DamageStrategy;

    constructor(stats: Stats) {
        this._initialStats = stats;
        this._currentStats = stats;

        this._damageStrategy = new NormalDamageStrategy();
    }

    public set damageStrategy(strategy: DamageStrategy) {
        this._damageStrategy = strategy;
    }

    public get currentStats() {
        return this._currentStats;
    }

    public damage(amount: number) {
        this._currentStats.health -= amount;
    }

    public attack(other: Entity) {
        const damageDealt = this._damageStrategy.GetDamageDealt(other.currentStats, this.currentStats);
        other.damage(damageDealt);
    }
}