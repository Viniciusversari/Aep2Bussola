
import {writeFile} from "fs/promises";
import Team from "./team.schema";
import pokemonController from "src/pokemon/pokemon.controller";
import Pokemon from "../pokemon/pokemon.schema";
class teamService {
    async createTeam(data:any){
       try {
        const team= data.team.map((team:any)=>{return team.name;})
        const finded=await Pokemon.find({"Nome": { $in : team}})
        const teamInfo={
            trainerName:data.trainerName,
            team:finded
        }
       const teamCreated=await Team.create({'trainerName':data.trainerName, "team":data.team})
       writeFile('team.json',JSON.stringify(teamInfo,null,2))
        return teamCreated
       } catch (error) {
        console.error('erro ao criar time',error)
       }  
    }
    async getTeamByName(trainerName){
        try {
            const team=await Team.find({"trainerName":trainerName})
            return team
        } catch (error) {
            
        }
    }
    async updateTeam(trainerName:any,team:any){
        try {
            const teamupd=await Team.findOneAndUpdate(trainerName,{"trainerName":trainerName, "team":team.team})
            console.log('a')
            return teamupd
        } catch (error) {
            
        }
    }
    async deleteTeam(trainerName:any){
        const teamdel=await Team.findOneAndDelete(trainerName)
        return teamdel
    }
}

export default new teamService();