import {Pikachu} from "../src/prototype/pikachu";
import {Rattata} from "../src/prototype/rattata";

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

    test('It should clone with different stats for each Pokémon', async () => {
        // Arrange
        const pikachu = new Pikachu();
        const rattata = new Rattata();

        // Act
        const wildPikachu: Pikachu = pikachu.clone();
        const wildRattata: Rattata = rattata.clone();

        // Assert
        expect(pikachu.hp).toEqual(25);
        expect(wildPikachu.hp).toEqual(26);
        expect(rattata.hp).toEqual(25);
        expect(wildRattata.hp).toEqual(27);
    });
});
