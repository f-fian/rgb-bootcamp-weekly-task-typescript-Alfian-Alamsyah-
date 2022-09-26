"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
exports.sequelize = new sequelize_1.default.Sequelize('type', 'root', '1234567', {
    host: 'localhost',
    dialect: 'mysql'
});
const clinic_1 = require("./clinic");
const covid19_1 = require("./covid19");
const mcu_1 = require("./mcu");
const testLab_1 = require("./testLab");
const clinicCovid19_1 = require("./clinicCovid19");
const clinicMcu_1 = require("./clinicMcu");
const clinicTestLab_1 = require("./clinicTestLab");
async function dropTable() {
    await clinicCovid19_1.clinicCovid19.drop();
    await clinicMcu_1.clinicMcu.drop();
    await clinicTestLab_1.clinicTestLab.drop();
    await clinic_1.clinic.drop();
    await covid19_1.covid19.drop();
    await mcu_1.mcu.drop();
    await testLab_1.testLab.drop();
}
async function tableRelation() {
    await clinic_1.clinic.hasMany(clinicCovid19_1.clinicCovid19);
    await clinicCovid19_1.clinicCovid19.belongsTo(clinic_1.clinic);
    await clinic_1.clinic.hasMany(clinicMcu_1.clinicMcu);
    await clinicMcu_1.clinicMcu.belongsTo(clinic_1.clinic);
    await clinic_1.clinic.hasMany(clinicTestLab_1.clinicTestLab);
    await clinicTestLab_1.clinicTestLab.belongsTo(clinic_1.clinic);
    await covid19_1.covid19.hasMany(clinicCovid19_1.clinicCovid19);
    await clinicCovid19_1.clinicCovid19.belongsTo(covid19_1.covid19);
    await mcu_1.mcu.hasMany(clinicMcu_1.clinicMcu);
    await clinicMcu_1.clinicMcu.belongsTo(mcu_1.mcu);
    await testLab_1.testLab.hasMany(clinicTestLab_1.clinicTestLab);
    await clinicTestLab_1.clinicTestLab.belongsTo(testLab_1.testLab);
}
async function createTable() {
    await clinic_1.clinic.sync();
    await covid19_1.covid19.sync();
    await mcu_1.mcu.sync();
    await testLab_1.testLab.sync();
    await clinicCovid19_1.clinicCovid19.sync();
    await clinicMcu_1.clinicMcu.sync();
    await clinicTestLab_1.clinicTestLab.sync();
}
exports.sequelize.authenticate().then(async () => {
    console.log("EMGN servernya jalan DARI MANA ddNJIR-----------------------------------------------");
    // await dropTable()
    // await tableRelation()
    // await createTable()
    // await createSeeder()
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
