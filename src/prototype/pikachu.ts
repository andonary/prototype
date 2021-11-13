import {Pokemon} from "./parent/pokemon";

export class Pikachu extends Pokemon {
    clone() {
        return new Pikachu({hp: 26});
    }

    equals(pokemon: Pokemon) {
        return pokemon instanceof Pikachu;
    }
}
