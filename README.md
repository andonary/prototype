# Prototype Example

This is an example in TypeScript of using the design pattern called "prototype"

## Wild Pokémon appear

This is probably not the real mechanism of the original game. I am reinventing a portion of the algorithm. 

When a player encounter a wild Pokémon, the game has already generated a template Pokémon. Only individual values (called IV) get variation making statistiques a bit different. The exact calculation of IV is not the concern of this repository.

Since we are playing in a Gameboy, CPU is very weak. Optimization needs to be done. Creating a new Pokémon is very costing. As a consequence, we are using the same template Pokémon, and regenerating a wild Pokémon with this.

Pokémon statisques :

- HP
- Attack
- Defense
- Special attack
- Special defense
- Speed

