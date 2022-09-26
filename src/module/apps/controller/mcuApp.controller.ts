import { NextFunction, Request, Response, Send } from "express";
import {mcuAppService} from "../service/mcuApp.service"

export class mcuAppController {
    public getMcu = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        const mcuFacility = await mcuAppService.get(id)
        res.json(mcuFacility)
    }
    public getListMcu = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const mcuList = await mcuAppService.getList()
        res.json(mcuList)

    }


}