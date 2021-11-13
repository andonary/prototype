import {Pokemon} from "./parent/pokemon";

export class Rattata extends Pokemon {
    hpIV: number = 2;

    clone() {
        return new Rattata(this.generateNewStats());
    }

    equals(pokemon: Pokemon) {
        return pokemon instanceof Rattata;
    }
}
