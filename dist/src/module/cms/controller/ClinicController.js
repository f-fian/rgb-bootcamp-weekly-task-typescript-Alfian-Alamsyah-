"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clinicService_1 = require("../service/clinicService");
class CmsController {
    constructor() {
        this.get = (req, res, next) => {
            res.status(200).json({ message: 'Hello World CMS' });
        };
        this.post = async (req, res, next) => {
            const { id, name, address, city, facility: { mcu }, facility: { covid19 }, facility: { testLab } } = req.body;
            // console.log("alfian");
            // console.log(id);
            // console.log(name);
            // console.log(address);
            // console.log(city);
            // console.log(mcu);
            // console.log(covid19);
            // console.log(testLab);
            const newClinic = await clinicService_1.clinicCms.create(id, name, address, city, mcu, covid19, testLab);
            // console.log("---------");
            // console.log("---------");
            // console.log(newClinic);
            res.json(newClinic);
        };
        this.update = async (req, res, next) => {
            const { name, address, city } = req.body;
            const id = parseInt(req.params.id);
            const newClinic = await clinicService_1.clinicCms.update(id, name, address, city);
            console.log("---------");
            console.log(newClinic);
            res.json({ msg: "Clinic has been updated", newClinic: newClinic });
        };
        this.delete = async (req, res, next) => {
            const id = parseInt(req.params.id);
            await clinicService_1.clinicCms.delete(id);
            res.status(204).json({ msg: "Clinic has been deleted" });
        };
    }
}
exports.default = CmsController;
