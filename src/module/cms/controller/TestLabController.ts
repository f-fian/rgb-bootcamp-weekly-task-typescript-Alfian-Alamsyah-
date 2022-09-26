import { NextFunction, Request, Response, Send } from "express";
import {testLabCms} from "../service/testLabService"

// import {testLab} from "./testLab"
// import {clinicCovid19} from "./clinicCovid19"
// import {clinicMcu} from "./clinicMcu"
// import {clinicTestLab} from "./clinicTestLab"
// import {createSeeder} from "../data/seeder"



export default class CmsController {
    public get = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        const testLab = await testLabCms.get(id)
        if (!testLab){
            res.status(200).send("Data yang dicari tidak ada")
        }else{
            res.json(testLab)
        }

    }

    public post = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const {id,name} = req.body
        const newTestLab = await testLabCms.post(id,name)
        console.log(newTestLab);
        res.json(newTestLab)
    }

    public update = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const {name} = req.body
        const id = parseInt(req.params.id)
        const newTestLab = await testLabCms.update(id,name)
        console.log("---------");
        res.json({msg:"testLab has been updated",newTestLab:newTestLab})
    }
    public delete = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        await testLabCms.delete(id)
        res.status(204)
    }

}