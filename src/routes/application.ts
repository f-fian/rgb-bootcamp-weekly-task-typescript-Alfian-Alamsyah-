import { Request, Response, Router,NextFunction } from "express";
import {clinicAppController} from "../module/apps/controller/clinicApp.controller";
import {covid19AppController} from "../module/apps/controller/covid19App.controller";
import {mcuAppController} from "../module/apps/controller/mcuApp.controller";
import {testLabAppController} from "../module/apps/controller/testLabApp.controller";




export class ApplicationRoute {
    public router: Router = Router();
    private clinicController: clinicAppController = new clinicAppController();
    private covid19Controller: covid19AppController = new covid19AppController();
    private mcuController: mcuAppController = new mcuAppController();
    private testLabController: testLabAppController = new testLabAppController();

    constructor() {
        this.initializeRouting();
    }

    initializeRouting() {
        this.router.get('/clinic/:id',this.clinicController.getClinic);
        this.router.get('/clinic',this.clinicController.getListClinic);
        this.router.get('/covid19/:id',this.covid19Controller.getCovid19);
        this.router.get('/covid19',this.covid19Controller.getListCovid19);
        this.router.get('/mcu/:id',this.mcuController.getMcu);
        this.router.get('/mcu',this.mcuController.getListMcu);
        this.router.get('/testLab/:id',this.testLabController.getTestLab);
        this.router.get('/testLab',this.testLabController.getListTestLab);
    }
}