
import {writeFile, readFile} from 'fs/promises'
import Pokemon from "./pokemon.schema"

import axios from "axios"
class PokemonService {
    async PokemonInfos(){
        try {
        const pokemon= await fetch('http://localhost:3000/pokemons-data')
        const pokemonList = await pokemon.json().then((allpokemons)=>{
            const poke= allpokemons.map((pokemons:any)=>{
                return {
                    Nome: pokemons.name,
                    Tipo: pokemons.types.map((types:any)=>{return types.type.name}),
                    Status: pokemons.stats.map((stats:any)=>{return (`${stats.stat.name} : ${stats.base_stat}`)}),
                    NumeroDex: pokemons.id,
                    Altura: pokemons.height,
                    Peso: pokemons.weight,
                    Moves: pokemons.moves.map((move:any) => move.move.name).slice(0, 4)
                }
            })
            return poke;
        })

        writeFile('pokemonList.json',JSON.stringify(pokemonList,null,2))
        await Pokemon.insertMany(pokemonList)
        return pokemonList;
        } catch (error) {
            console.error('erro ao buscar',error)
        }
        
    }


    async findPokeByName(Name:any){
        try {
            const finded=await Pokemon.find({"Nome": { $in : Name}})
            return finded
        } catch (error) {
            console.error('erro na busca',error)
        }
    }
    async findPokeByType(Tipo:any){
        try {
            const finded=await Pokemon.find({"Tipo":Tipo})
            return finded
        } catch (error) {
            console.error('erro na busca por tipo',error)
        }
    }
    async findPokeByDexID(Id:any){
        try {
            const finded=await Pokemon.findById({Id})
            return finded
        } catch (error) {
            console.error('erro na busca por ID',error)
        }
    }
    async mapearPokemons(){
        try {
            const pokemon= await readFile('pokemonList.json')
            const pokelist=JSON.parse(pokemon.toString())
            const mapearTipo= pokelist.reduce((mapearTipo,tipoAtual)=>{
                mapearTipo[tipoAtual.Tipo]=mapearTipo[tipoAtual.Tipo]||[]
                mapearTipo[tipoAtual.Tipo].push(tipoAtual)
                mapearTipo[tipoAtual.Tipo].sort((a,b)=>a.NumeroDex-b.NumeroDex)
                return mapearTipo
            },{})
            await writeFile('tiposPokemon.json',JSON.stringify(mapearTipo,null,2))
            return mapearTipo
        } catch (error) {
            console.error('erro ao listar tipos',error)
        }
    }//2




}

export default new PokemonService()
