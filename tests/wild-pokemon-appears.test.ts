class Pokemon {}

class Pikachu extends Pokemon {
    clone() {
        return this;
    }

    equals(pokemon: Pokemon) {
        return pokemon instanceof Pikachu;
    }
}

class Rattata extends Pokemon {
    clone() {
        return this;
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
        expect(wildPikachu.equals(wildRattata)).toEqual(false);
    });
});
