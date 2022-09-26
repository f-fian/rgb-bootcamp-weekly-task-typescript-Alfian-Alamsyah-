import { NextFunction, Request, Response, Send } from "express";
import {clinicAppService} from "../service/clinicApp.service"

export class clinicAppController {
    public getClinic = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        const id = parseInt(req.params.id)
        const clinicFacility = await clinicAppService.get(id)
        res.json(clinicFacility)
    }
    public getListClinic = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
        // const listAllClinicFacility = await clinicAppService.getListClinic()
        // res.json(listAllClinicFacility)

    }


}