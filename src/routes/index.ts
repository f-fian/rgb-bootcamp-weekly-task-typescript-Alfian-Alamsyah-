import { Express,Request,Response,NextFunction,Router } from "express";
import {ApplicationRoute} from "./application";
import {CmsClinicRoute} from "./cmsClinic";
import {CmsTestLabRoute} from "./cmsTestLab";
import {CmsCovid19Route} from "./cmsCovid19";
import {CmsMcuRoute} from "./cmsMcu";

function apa(req:Request,res:Response,next:NextFunction):any{
    console.log("alamsyah jayakelana")
    next()
}

export default class Route {
    public router: Router = Router();
    private apps: ApplicationRoute = new ApplicationRoute();
    private cmsClinic: CmsClinicRoute = new CmsClinicRoute();
    private cmsTestLab: CmsTestLabRoute = new CmsTestLabRoute();
    private cmsCovid19: CmsCovid19Route = new CmsCovid19Route();
    private cmsMcu: CmsMcuRoute = new CmsMcuRoute();

    constructor(private app: Express) {
        this.initializeRouting();
    }

    initializeRouting() {
        this.app.use('/application',apa,this.apps.router);
        this.app.use('/cms/clinic', this.cmsClinic.router);
        
        this.app.use('/cms/covid19', this.cmsCovid19.router);
        this.app.use('/cms/mcu', this.cmsMcu.router);
        this.app.use('/cms/testlab', this.cmsTestLab.router);
        
        
    }
}