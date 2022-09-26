"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covid19Cms = void 0;
const covid19_1 = require("../../../model/covid19");
exports.covid19Cms = {
    get: async (id) => {
        const data = await covid19_1.covid19.findOne({
            where: {
                id: id
            }
        });
        console.log(data);
        return data?.toJSON();
    },
    post: async (id, covidTestName, avgPrice) => {
        let data = await covid19_1.covid19.create({
            id: id,
            covidTestName: covidTestName,
            avgPrice: avgPrice
        });
        return data.toJSON();
    },
    update: async (id, covidTestName, avgPrice) => {
        await covid19_1.covid19.update({ covidTestName: covidTestName, avgPrice: avgPrice }, { where: { id: id } });
        const newCovid19 = await covid19_1.covid19.findOne({ where: { id: id } });
        console.log(newCovid19);
        return newCovid19;
    },
    delete: async (id) => {
        await covid19_1.covid19.destroy({ where: { id: id } });
        // console.log("aa")
        // console.log(newCLinic)
        // return newCLinic
    },
};
