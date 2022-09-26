"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const application_1 = require("./application");
const cmsClinic_1 = require("./cmsClinic");
const cmsTestLab_1 = require("./cmsTestLab");
const cmsCovid19_1 = require("./cmsCovid19");
const cmsMcu_1 = require("./cmsMcu");
function apa(req, res, next) {
    console.log("alamsyah jayakelana");
    next();
}
class Route {
    constructor(app) {
        this.app = app;
        this.router = (0, express_1.Router)();
        this.apps = new application_1.ApplicationRoute();
        this.cmsClinic = new cmsClinic_1.CmsClinicRoute();
        this.cmsTestLab = new cmsTestLab_1.CmsTestLabRoute();
        this.cmsCovid19 = new cmsCovid19_1.CmsCovid19Route();
        this.cmsMcu = new cmsMcu_1.CmsMcuRoute();
        this.initializeRouting();
    }
    initializeRouting() {
        this.app.use('/application', apa, this.apps.router);
        this.app.use('/cms/clinic', this.cmsClinic.router);
        this.app.use('/cms/covid19', this.cmsCovid19.router);
        this.app.use('/cms/mcu', this.cmsMcu.router);
        this.app.use('/cms/testlab', this.cmsTestLab.router);
    }
}
exports.default = Route;
