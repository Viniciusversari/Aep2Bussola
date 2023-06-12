import teamService from "./team.service";
import { Request,Response } from "express";

class teamController{

    public async createTeam(req:Request,res:Response){
        const team=await teamService.createTeam(req.body)
        res.json(team)
    }
    public async getTeamByName(req:Request,res:Response){
        const team=await teamService.getTeamByName(req.params.trainerName)
        res.json(team)
    }
    public async updateTeam(req:Request,res:Response){
        const team=await teamService.updateTeam(req.params.trainerName,req.body)
        res.json(team)
    }
    public async deleteTeam(req:Request,res:Response){
        const team=await teamService.deleteTeam(req.params.trainerName)
        res.json(team)
    }
}

export default new teamController()