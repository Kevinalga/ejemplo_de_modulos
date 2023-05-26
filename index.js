import { createSearchBar } from './search.js'
import { games } from './api.js'
import { createCard } from './card.js'


const gamesList = document.createElement('div')
gamesList.className = 'games-list'

const searchBar = createSearchBar((searchValue) => {
    gamesList.innerHTML = '' // esto es para eliminar todos los elementos de la lista de juegos
    games.forEach((game) => {
        if (game.name.includes(searchValue) || game.description.includes(searchValue)) {
            const gameCard = createCard(game)
            gamesList.append(gameCard)
        }
    })
})


document.body.append(searchBar, gamesList)