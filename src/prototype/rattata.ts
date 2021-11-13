import {Pokemon} from "./parent/pokemon";

export class Rattata extends Pokemon {
    clone() {
        return new Rattata({hp: 27});
    }

    equals(pokemon: Pokemon) {
        return pokemon instanceof Rattata;
    }
}
