import pokemonService from "./pokemon.service"

import { Request,Response } from "express"

class pokemonController{
    public async PokemonInfos(req:Request,res:Response){
        const pokemon=await pokemonService.PokemonInfos()
        res.json(pokemon)
    }

    public async mapearPokemons(req:Request,res:Response){
        const pokemon=await pokemonService.mapearPokemons()
        res.json(pokemon)
    }

    public async findPokeByName(req:Request,res:Response){
        const pokemon=await pokemonService.findPokeByName(req.params.name.split(','))
        res.json(pokemon)
    }

    public async findPokeByType(req:Request,res:Response){
        const pokemon=await pokemonService.findPokeByType(req.params.type)
        res.json(pokemon)
    }

    public async findPokeByDexID(req:Request,res:Response){
        const pokemon=await pokemonService.findPokeByDexID(req.params.id)
        res.json(pokemon)
    }
}

export default new pokemonController();