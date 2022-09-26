"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcuService_1 = require("../service/mcuService");
// import {testLab} from "./testLab"
// import {clinicMcu} from "./clinicMcu"
// import {clinicMcu} from "./clinicMcu"
// import {clinicTestLab} from "./clinicTestLab"
// import {createSeeder} from "../data/seeder"
class CmsController {
    constructor() {
        this.get = async (req, res, next) => {
            const id = parseInt(req.params.id);
            let dataMcu = await mcuService_1.mcuCms.get(id);
            res.json(dataMcu);
        };
        this.post = async (req, res, next) => {
            const { id, packageName } = req.body;
            const newMcu = await mcuService_1.mcuCms.post(id, packageName);
            console.log(newMcu);
            res.json(newMcu);
        };
        this.update = async (req, res, next) => {
            const { packageName } = req.body;
            const id = parseInt(req.params.id);
            const newMcu = await mcuService_1.mcuCms.update(id, packageName);
            console.log("---------");
            res.json({ msg: "Mcu Test has been updated", newMcu: newMcu });
        };
        this.delete = async (req, res, next) => {
            const id = parseInt(req.params.id);
            await mcuService_1.mcuCms.delete(id);
            res.status(204).json({ msg: "Mcu Test has been deleted" });
        };
    }
}
exports.default = CmsController;
