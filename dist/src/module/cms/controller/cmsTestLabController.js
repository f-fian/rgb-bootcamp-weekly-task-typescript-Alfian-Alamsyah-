"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testLabService_1 = require("../service/testLabService");
// import {testLab} from "./testLab"
// import {clinicCovid19} from "./clinicCovid19"
// import {clinicMcu} from "./clinicMcu"
// import {clinicTestLab} from "./clinicTestLab"
// import {createSeeder} from "../data/seeder"
class CmsController {
    constructor() {
        this.get = (req, res, next) => {
            const id = req.params.id;
            testLabService_1.testLabCms.get(1);
        };
        this.post = async (req, res, next) => {
            const { id, name } = req.body;
            const newTestLab = await testLabService_1.testLabCms.post(id, name);
            console.log(newTestLab);
            res.json(newTestLab);
        };
        this.update = async (req, res, next) => {
            const { name } = req.body;
            const id = parseInt(req.params.id);
            const newTestLab = await testLabService_1.testLabCms.update(id, name);
            console.log("---------");
            res.json({ msg: "testLab has been updated", newTestLab: newTestLab });
        };
        this.delete = async (req, res, next) => {
            const id = parseInt(req.params.id);
            await testLabService_1.testLabCms.delete(id);
            res.status(204).json({ msg: "testLab has been deleted" });
        };
    }
}
exports.default = CmsController;
