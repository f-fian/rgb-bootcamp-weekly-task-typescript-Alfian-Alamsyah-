"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicServices = void 0;
const clinic_1 = require("../../../model/clinic");
let name2 = "alfian";
exports.clinicServices = {
    create: async () => {
        await clinic_1.clinic.create({
            name: "Tempat Baru",
            address: "Sukabumi Timur",
            city: "Sukabumi"
        });
    }
};
