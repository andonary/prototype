import {PokemonStats} from "../../models/stats";

export abstract class Pokemon implements PokemonStats {
    hp: number = 25;
    abstract hpIV: number;

    constructor(newStats?: PokemonStats) {
        if (newStats) {
            Object.assign(this, newStats);
        }
    }

    abstract clone(): Omit<Pokemon, "clone">

    generateNewStats(additional: PokemonStats = this.IV()): PokemonStats {
        return {
            hp: this.hp + additional.hp
        }
    }

    IV(): PokemonStats {
        return {
            hp: this.hpIV
        }
    }
}
