"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicAppService = void 0;
const clinic_1 = require("../../../model/clinic");
const covid19_1 = require("../../../model/covid19");
const clinicCovid19_1 = require("../../../model/clinicCovid19");
const mcu_1 = require("../../../model/mcu");
const clinicMcu_1 = require("../../../model/clinicMcu");
const testLab_1 = require("../../../model/testLab");
const clinicTestLab_1 = require("../../../model/clinicTestLab");
async function getDataClinic(id) {
    const findClinic = await clinic_1.clinic.findOne({
        where: {
            id: id
        },
        raw: true
    });
    return findClinic;
}
async function makeConnection() {
    await clinicMcu_1.clinicMcu.belongsTo(mcu_1.mcu);
    await clinicMcu_1.clinicMcu.belongsTo(clinic_1.clinic);
    await clinicCovid19_1.clinicCovid19.belongsTo(covid19_1.covid19);
    await clinicCovid19_1.clinicCovid19.belongsTo(clinic_1.clinic);
    await clinicTestLab_1.clinicTestLab.belongsTo(testLab_1.testLab);
    await clinicTestLab_1.clinicTestLab.belongsTo(clinic_1.clinic);
}
async function getDataMcu(id) {
    const findClinicMcuFacility = await clinicMcu_1.clinicMcu.findAll({
        where: {
            clinicId: id
        },
        include: [mcu_1.mcu, clinic_1.clinic],
        raw: true
    });
    let listMcu = [];
    for (let data of findClinicMcuFacility) {
        listMcu.push(data.mcuId);
    }
    const findMcuFacility = await mcu_1.mcu.findAll({
        where: {
            id: listMcu
        }
    });
    let facilityMcuList = [];
    for (let data of findMcuFacility) {
        facilityMcuList.push(data.dataValues.packageName);
    }
    return facilityMcuList;
}
async function getDataTestLab(id) {
    const findClinicTestLabFacility = await clinicTestLab_1.clinicTestLab.findAll({
        where: {
            clinicId: id
        },
        include: [testLab_1.testLab, clinic_1.clinic],
        raw: true
    });
    let listTestLab = [];
    for (let data of findClinicTestLabFacility) {
        listTestLab.push(data.testlabId);
    }
    const findTestLabFacility = await testLab_1.testLab.findAll({
        where: {
            id: listTestLab
        }
    });
    let facilityTestLab = [];
    for (let data of findTestLabFacility) {
        facilityTestLab.push(data.dataValues.testLabName);
    }
    return facilityTestLab;
}
async function getDataCovid19(id) {
    const findClinicCovid19Facility = await clinicCovid19_1.clinicCovid19.findAll({
        where: {
            clinicId: id
        },
        include: [clinic_1.clinic, covid19_1.covid19],
        raw: true
    });
    let listCovid19 = [];
    for (let data of findClinicCovid19Facility) {
        listCovid19.push(data.covid19Id);
    }
    const findCovid19Facility = await covid19_1.covid19.findAll({
        where: {
            id: listCovid19
        }
    });
    let facilityCoivid19List = [];
    for (let data of findCovid19Facility) {
        facilityCoivid19List.push(data.dataValues.covidTestName);
    }
    return facilityCoivid19List;
}
exports.clinicAppService = {
    get: async (id) => {
        const { name, address, city } = await getDataClinic(id);
        await makeConnection();
        let facilityMcuList = await getDataMcu(id);
        let facilityTestLab = await getDataTestLab(id);
        let facilityCoivid19List = await getDataCovid19(id);
        const result = {
            id: id,
            name: name,
            address: address,
            city: city,
            facility: {
                mcu: facilityMcuList,
                covid19: facilityCoivid19List,
                testLab: facilityTestLab
            }
        };
        return result;
    },
    getListClinic: async () => {
        const dd = await clinic_1.clinic.findAll({
            attributes: ['id'],
            raw: true
        });
        let listId = [];
        for (let data of dd) {
            listId.push(data.id);
        }
        console.log(listId);
        let listAllClinicFacility = [];
        for (let x = 0; x < listId.length; x++) {
            const { id, name, address, city } = await getDataClinic(listId[x]);
            console.log(id);
            await makeConnection();
            let facilityMcuList = await getDataMcu(listId[x]);
            let facilityTestLab = await getDataTestLab(listId[x]);
            let facilityCoivid19List = await getDataCovid19(listId[x]);
            const result = {
                id: id,
                name: name,
                address: address,
                city: city,
                facility: {
                    mcu: facilityMcuList,
                    covid19: facilityCoivid19List,
                    testLab: facilityTestLab
                }
            };
            listAllClinicFacility.push(result);
        }
        return listAllClinicFacility;
    }
};
