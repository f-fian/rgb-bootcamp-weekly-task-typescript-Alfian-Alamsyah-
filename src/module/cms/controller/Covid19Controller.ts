import { NextFunction, Request, Response, Send } from "express";
import {covid19Cms} from "../service/covid19Service"

// import {testLab} from "./testLab"
// import {clinicCovid19} from "./clinicCovid19"
// import {clinicMcu} from "./clinicMcu"
// import {clinicTestLab} from "./clinicTestLab"
// import {createSeeder} from "../data/seeder"



export default class CmsController {
    public get = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        let dataCovid19 = await covid19Cms.get(id)
        res.json(dataCovid19)

    }
    public post = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const {id,covidTestName,avgPrice} = req.body
        const newCovid19 = await covid19Cms.post(id,covidTestName,avgPrice)
        console.log(newCovid19);
        res.json(newCovid19)
    }
    public update = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const {covidTestName,avgPrice} = req.body
        const id = parseInt(req.params.id)
        const newTestLab = await covid19Cms.update(id,covidTestName,avgPrice)
        console.log("---------");
        res.json({msg:"Covid19 Test has been updated",newTestLab:newTestLab})
    }
    public delete = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        await covid19Cms.delete(id)
        res.status(204).json({msg:"Covid19 Test has been deleted"})
    }
}