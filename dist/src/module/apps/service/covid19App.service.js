"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covid19AppService = void 0;
const covid19_1 = require("../../../model/covid19");
exports.covid19AppService = {
    get: async (id) => {
        const data = await covid19_1.covid19.findOne({
            where: {
                id: id
            }
        });
        console.log(data);
        return data?.toJSON();
    },
    getList: async () => {
        const dataCovid19 = await covid19_1.covid19.findAll();
        let list = [];
        for (let data of dataCovid19) {
            list.push(data.dataValues);
        }
        return list;
    },
};
