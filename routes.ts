import {Router} from 'express'
import controller from './PokeAPI/controller'
import teamcontroller from './Poketeam/teamcontroller'


const routes = Router()

// Pokemons //
routes.get('/pokemonsURL', controller.Pokecreate)
routes.post('/savepokemons', controller.SavePokeData)
routes.get('/savetype', controller.savetype)
routes.get('/pokemons', controller.list)
routes.get('/pokemonsDex/:dex', controller.findDex)
routes.get('/pokemonsType/:type', controller.findType)
routes.get('/pokemonsMove/:move', controller.findMove)

//  Team  //

routes.post('/teamCreate', teamcontroller.create)
routes.get('/teams', teamcontroller.list)
routes.get('/trainerName/:trainerName', teamcontroller.findTrainer)
routes.put('/trainerName/:trainerName', teamcontroller.updateByTrainer)
routes.delete('/trainerName/:trainerName', teamcontroller.deleteByTrainer)