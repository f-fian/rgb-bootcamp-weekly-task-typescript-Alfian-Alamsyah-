import { Request, Response, Router } from "express";
import CmsController from "../module/cms/controller/Covid19Controller";

export class CmsCovid19Route {
    public router: Router = Router();
    private controller: CmsController = new CmsController();

    constructor() {
        this.initializeRouting();
    }

    initializeRouting() {
        this.router.get('/:id', this.controller.get);
        this.router.post('/', this.controller.post);
        this.router.put('/:id', this.controller.update);
        this.router.delete('/:id', this.controller.delete);
    }
}