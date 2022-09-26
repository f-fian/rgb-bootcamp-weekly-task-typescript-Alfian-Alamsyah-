import { Request, Response, Router } from "express";
import CmsController from "../module/cms/controller/ClinicController";

export class CmsClinicRoute {
    public router: Router = Router();
    private controller: CmsController = new CmsController();

    constructor() {
        this.initializeRouting();
    }

    initializeRouting() {
        this.router.get('/', this.controller.get);
        this.router.post('/', this.controller.post);
        this.router.put('/:id', this.controller.update);
        this.router.delete('/:id', this.controller.delete);
    }
}