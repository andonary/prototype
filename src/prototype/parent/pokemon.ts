import {IV} from "../../models/iv";

export abstract class Pokemon {
    hp: number = 25;

    constructor(individualValues?: IV) {
        if (individualValues) {
            Object.assign(this, individualValues);
        }
    }

    abstract clone(): Omit<Pokemon, "clone">
}
