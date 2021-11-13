interface IV {
    hp: number
}

abstract class Pokemon {
    hp: number = 25;

    constructor(individualValues?: IV) {
        if (individualValues) {
            Object.assign(this, individualValues);
        }
    }

    abstract clone(): Omit<Pokemon, "clone">
}

class Pikachu extends Pokemon {
    clone() {
        return new Pikachu({hp: 26});
    }

    equals(pokemon: Pokemon) {
        return pokemon instanceof Pikachu;
    }
}

class Rattata extends Pokemon {
    clone() {
        return this;
    }

    equals(pokemon: Pokemon) {
        return pokemon instanceof Rattata;
    }
}

describe('TU wild Pokémon appears', () => {
    test('It should clone a new wild Pikachu', async () => {
        // Arrange
        const pikachu = new Pikachu();

        // Act
        const wildPikachu: Pikachu = pikachu.clone();

        // Assert
        expect(wildPikachu.equals(pikachu)).toEqual(true);
    });

    test('It should clone a new wild Rattata which is different of a wild Pikachu', async () => {
        // Arrange
        const rattata = new Rattata();
        const pikachu = new Pikachu();

        // Act
        const wildRattata: Rattata = rattata.clone();
        const wildPikachu: Pikachu = pikachu.clone();

        // Assert
        expect(wildRattata.equals(rattata)).toEqual(true);
        expect(wildPikachu.equals(wildRattata)).toEqual(false);
    });

    test('It should clone with different stats', async () => {
        // Arrange
        const pikachu = new Pikachu();

        // Act
        const wildPikachu: Pikachu = pikachu.clone();

        // Assert
        expect(pikachu.hp).toEqual(25);
        expect(wildPikachu.hp).toEqual(26);
    });
});
