"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covid19AppController = void 0;
const covid19App_service_1 = require("../service/covid19App.service");
class covid19AppController {
    constructor() {
        this.getCovid19 = async (req, res, next) => {
            const id = parseInt(req.params.id);
            const covid19Facility = await covid19App_service_1.covid19AppService.get(id);
            res.json(covid19Facility);
        };
        this.getListCovid19 = async (req, res, next) => {
            const covid19List = await covid19App_service_1.covid19AppService.getList();
            res.json(covid19List);
        };
    }
}
exports.covid19AppController = covid19AppController;
