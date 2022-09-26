"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRoute = void 0;
const express_1 = require("express");
const clinicApp_controller_1 = require("../module/apps/controller/clinicApp.controller");
const covid19App_controller_1 = require("../module/apps/controller/covid19App.controller");
const mcuApp_controller_1 = require("../module/apps/controller/mcuApp.controller");
const testLabApp_controller_1 = require("../module/apps/controller/testLabApp.controller");
class ApplicationRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.clinicController = new clinicApp_controller_1.clinicAppController();
        this.covid19Controller = new covid19App_controller_1.covid19AppController();
        this.mcuController = new mcuApp_controller_1.mcuAppController();
        this.testLabController = new testLabApp_controller_1.testLabAppController();
        this.initializeRouting();
    }
    initializeRouting() {
        this.router.get('/clinic/:id', this.clinicController.getClinic);
        this.router.get('/clinic', this.clinicController.getListClinic);
        this.router.get('/covid19/:id', this.covid19Controller.getCovid19);
        this.router.get('/covid19', this.covid19Controller.getListCovid19);
        this.router.get('/mcu/:id', this.mcuController.getMcu);
        this.router.get('/mcu', this.mcuController.getListMcu);
        this.router.get('/testLab/:id', this.testLabController.getTestLab);
        this.router.get('/testLab', this.testLabController.getListTestLab);
    }
}
exports.ApplicationRoute = ApplicationRoute;
