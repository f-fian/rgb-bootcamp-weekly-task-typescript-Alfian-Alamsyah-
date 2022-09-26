import { NextFunction, Request, Response, Send } from "express";
import {covid19AppService} from "../service/covid19App.service"

export class covid19AppController {
    public getCovid19 = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        const covid19Facility = await covid19AppService.get(id)
        res.json(covid19Facility)
    }
    public getListCovid19  = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const covid19List = await covid19AppService.getList()
        res.json(covid19List)

    }


}