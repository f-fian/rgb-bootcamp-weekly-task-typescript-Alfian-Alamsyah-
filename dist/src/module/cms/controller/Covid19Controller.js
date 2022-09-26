"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const covid19Service_1 = require("../service/covid19Service");
// import {testLab} from "./testLab"
// import {clinicCovid19} from "./clinicCovid19"
// import {clinicMcu} from "./clinicMcu"
// import {clinicTestLab} from "./clinicTestLab"
// import {createSeeder} from "../data/seeder"
class CmsController {
    constructor() {
        this.get = async (req, res, next) => {
            const id = parseInt(req.params.id);
            let dataCovid19 = await covid19Service_1.covid19Cms.get(id);
            res.json(dataCovid19);
        };
        this.post = async (req, res, next) => {
            const { id, covidTestName, avgPrice } = req.body;
            const newCovid19 = await covid19Service_1.covid19Cms.post(id, covidTestName, avgPrice);
            console.log(newCovid19);
            res.json(newCovid19);
        };
        this.update = async (req, res, next) => {
            const { covidTestName, avgPrice } = req.body;
            const id = parseInt(req.params.id);
            const newTestLab = await covid19Service_1.covid19Cms.update(id, covidTestName, avgPrice);
            console.log("---------");
            res.json({ msg: "Covid19 Test has been updated", newTestLab: newTestLab });
        };
        this.delete = async (req, res, next) => {
            const id = parseInt(req.params.id);
            await covid19Service_1.covid19Cms.delete(id);
            res.status(204).json({ msg: "Covid19 Test has been deleted" });
        };
    }
}
exports.default = CmsController;
