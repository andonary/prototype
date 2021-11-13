import {Pokemon} from "./parent/pokemon";

export class Pikachu extends Pokemon {
    hpIV: number = 1;

    clone() {
        return new Pikachu(this.generateNewStats());
    }

    equals(pokemon: Pokemon) {
        return pokemon instanceof Pikachu;
    }
}
