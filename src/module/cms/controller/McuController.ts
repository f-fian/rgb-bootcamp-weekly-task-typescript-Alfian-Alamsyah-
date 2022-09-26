import { NextFunction, Request, Response, Send } from "express";
import {mcuCms} from "../service/mcuService"

// import {testLab} from "./testLab"
// import {clinicMcu} from "./clinicMcu"
// import {clinicMcu} from "./clinicMcu"
// import {clinicTestLab} from "./clinicTestLab"
// import {createSeeder} from "../data/seeder"



export default class CmsController {
    public get = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        let dataMcu = await mcuCms.get(id)
        res.json(dataMcu)

    }
    public post = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const {id,packageName} = req.body
        const newMcu = await mcuCms.post(id,packageName)
        console.log(newMcu);
        res.json(newMcu)
    }
    public update = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const {packageName} = req.body
        const id = parseInt(req.params.id)
        const newMcu = await mcuCms.update(id,packageName)
        console.log("---------");
        res.json({msg:"Mcu Test has been updated",newMcu:newMcu})
    }
    public delete = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        await mcuCms.delete(id)
        res.status(204).json({msg:"Mcu Test has been deleted"})
    }
}