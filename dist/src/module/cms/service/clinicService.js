"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicCms = void 0;
const index_1 = require("../../../model/index");
const clinic_1 = require("../../../model/clinic");
const clinicCovid19_1 = require("../../../model/clinicCovid19");
const clinicMcu_1 = require("../../../model/clinicMcu");
const clinicTestLab_1 = require("../../../model/clinicTestLab");
// interface newCLinic{
//     name:string,
//     address:string,
//     city:string
// }
exports.clinicCms = {
    create: async (id, name, address, city, mcu, covid19, testLab) => {
        console.log("alfian");
        const t = await index_1.sequelize.transaction();
        try {
            const newClinic = await clinic_1.clinic.create({
                id: id,
                name: name,
                address: address,
                city: city
            }, { transaction: t });
            console.log(newClinic);
            const arrayClinicCovid19 = [];
            const arrayClinicMcu = [];
            const arrayClinicTestLab = [];
            for (let data of mcu) {
                arrayClinicMcu.push({ clinicId: id, mcuId: data });
            }
            const newClinicMcu = await clinicMcu_1.clinicMcu.bulkCreate(arrayClinicMcu, { transaction: t });
            console.log(newClinicMcu);
            /////////////////////////////////
            for (let data of covid19) {
                arrayClinicCovid19.push({ clinicId: id, covid19Id: data });
            }
            const newClinicCovid19 = await clinicCovid19_1.clinicCovid19.bulkCreate(arrayClinicCovid19, { transaction: t });
            console.log(newClinicCovid19);
            ///////////////////////////////////////
            for (let data of testLab) {
                arrayClinicTestLab.push({ clinicId: id, testlabId: data });
            }
            const newClinicTestLab = await clinicTestLab_1.clinicTestLab.bulkCreate(arrayClinicTestLab, { transaction: t });
            console.log(newClinicTestLab);
            await t.commit();
            console.log("berhasil?");
        }
        catch (error) {
            console.log("tidak berhasil");
            console.log(error);
        }
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
