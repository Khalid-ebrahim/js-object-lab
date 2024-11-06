const pokemon = require('./data.js')

const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ]
}

//console.dir(pokemon, { maxArrayLength: null })
//console.log(game)
//Solve Exercise 3 here:
game.difficulty = ['easy', 'med', 'hard']
//Solve Exercise 4 here:
const starterPokemon = pokemon.find((poke) => poke.starter === true)
game.party.push(starterPokemon)
//Solve Exercise 5 here:
const selectedPokemon = pokemon.filter(
  (poke) => poke.HP > 40 || poke.type === 'fire'
)

const newPokemon = selectedPokemon.slice(0, 3)

game.party = game.party.concat(newPokemon)
//Solve Exercise 6 here:
