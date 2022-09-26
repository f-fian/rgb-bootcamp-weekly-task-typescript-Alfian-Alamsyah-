"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicAppController = void 0;
const clinicApp_service_1 = require("../service/clinicApp.service");
class clinicAppController {
    constructor() {
        this.getClinic = async (req, res, next) => {
            const id = parseInt(req.params.id);
            const clinicFacility = await clinicApp_service_1.clinicAppService.get(id);
            res.json(clinicFacility);
        };
        this.getListClinic = async (req, res, next) => {
            // const listAllClinicFacility = await clinicAppService.getListClinic()
            // res.json(listAllClinicFacility)
        };
    }
}
exports.clinicAppController = clinicAppController;
