"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeeder = void 0;
const data_1 = require("./data");
const clinic_1 = require("../model/clinic");
const covid19_1 = require("../model/covid19");
const mcu_1 = require("../model/mcu");
const testLab_1 = require("../model/testLab");
const clinicCovid19_1 = require("../model/clinicCovid19");
const clinicMcu_1 = require("../model/clinicMcu");
const clinicTestLab_1 = require("../model/clinicTestLab");
// import { sequelize } from "../model/index";
async function createSeeder() {
    await clinic_1.clinic.bulkCreate(data_1.clinicData);
    await covid19_1.covid19.bulkCreate(data_1.covid19Data);
    await mcu_1.mcu.bulkCreate(data_1.mcuData);
    await testLab_1.testLab.bulkCreate(data_1.testLabData);
    for (let data of data_1.clinicData) {
        for (let data2 of data_1.covid19Data) {
            await clinicCovid19_1.clinicCovid19.create({
                clinicId: data.id,
                covid19Id: data2.id
            });
        }
    }
    for (let data of data_1.clinicData) {
        for (let data2 of data_1.mcuData) {
            await clinicMcu_1.clinicMcu.create({
                clinicId: data.id,
                mcuId: data2.id
            });
        }
    }
    for (let data of data_1.clinicData) {
        for (let data2 of data_1.testLabData) {
            await clinicTestLab_1.clinicTestLab.create({
                clinicId: data.id,
                testlabId: data2.id
            });
        }
    }
}
exports.createSeeder = createSeeder;
