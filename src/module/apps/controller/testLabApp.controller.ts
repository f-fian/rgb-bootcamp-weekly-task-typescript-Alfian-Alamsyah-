import { NextFunction, Request, Response, Send } from "express";
import {testLabService} from "../service/testLabApp.service"

export class testLabAppController {
    public getTestLab = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        const testLabFacility = await testLabService.get(id)
        res.json(testLabFacility)
    }
    public getListTestLab = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const testLabList = await testLabService.getList()
        res.json(testLabList)

    }


}