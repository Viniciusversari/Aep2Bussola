import { Router } from "express"
import pokemonController from "./src/pokemon/pokemon.controller"
import teamController from "./src/team/team.controller"
const routes=Router()

routes.post('/PokemonInfos',pokemonController.PokemonInfos)
routes.get('/mapearPokemons',pokemonController.mapearPokemons)
routes.get('/findPokeByName/:name',pokemonController.findPokeByName)
routes.get('/findPokeByType/:type',pokemonController.findPokeByType)
routes.get('/findPokeByDexID/:id',pokemonController.findPokeByDexID)
routes.post('/createTeam',teamController.createTeam)
routes.get('/getTeamByName/:trainerName',teamController.getTeamByName)
routes.put('/updateTeam/:trainerName',teamController.updateTeam)
routes.delete('/deleteTeam/:trainerName',teamController.deleteTeam)
export default routes;