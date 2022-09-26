"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicCms = void 0;
const clinic_1 = require("../../../model/clinic");
exports.clinicCms = {
    create: async (name, address, city) => {
        let data = await clinic_1.clinic.create({
            name: name,
            address: address,
            city: city,
        });
        console.log(data.toJSON());
        return data.toJSON();
    },
    update: async (id, name, address, city) => {
        await clinic_1.clinic.update({ name: name, address: address, city: city }, { where: { id: id } });
        const newCLinic = await clinic_1.clinic.findOne({ where: { id: id } });
        return newCLinic;
    },
    delete: async (id) => {
        await clinic_1.clinic.destroy({ where: { id: id } });
        // console.log("aa")
        // console.log(newCLinic)
        // return newCLinic
    },
};
