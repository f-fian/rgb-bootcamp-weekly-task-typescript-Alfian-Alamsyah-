import { NextFunction, Request, Response, Send } from "express";
import {clinicCms} from "../service/clinicService"



export default class CmsController {
    public get = (req: Request, res: Response, next: NextFunction): void => {
        res.status(200).json({ message: 'Hello World CMS'});
    }

    public post = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const {id,name,address,city,facility:{mcu},facility:{covid19},facility:{testLab}} = req.body

        // console.log("alfian");
        // console.log(id);
        // console.log(name);
        // console.log(address);
        // console.log(city);
        // console.log(mcu);
        // console.log(covid19);
        // console.log(testLab);

        const newClinic = await clinicCms.create(id,name,address,city,mcu,covid19,testLab)
        // console.log("---------");
        // console.log("---------");
        // console.log(newClinic);
        res.json(newClinic)
    }
    public update = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const {name,address,city} = req.body
        const id = parseInt(req.params.id)
        const newClinic = await clinicCms.update(id,name,address,city)
        console.log("---------");
        console.log(newClinic);
        res.json({msg:"Clinic has been updated",newClinic:newClinic})
    }
    public delete = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        await clinicCms.delete(id)
        res.status(204).json({msg:"Clinic has been deleted"})
    }

    
}