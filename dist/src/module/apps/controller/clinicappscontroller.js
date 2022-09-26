"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_service_1 = require("../service/application.service");
class ApplicationController {
    constructor() {
        this.getClinic = async (req, res, next) => {
            const id = parseInt(req.params.id);
            const clinicFacility = await application_service_1.applicationService.getClinic(id);
            res.json(clinicFacility);
        };
        this.getListClinic = async (req, res, next) => {
            const listAllClinicFacility = await application_service_1.applicationService.getListClinic();
            res.json(listAllClinicFacility);
        };
    }
}
exports.default = ApplicationController;
