"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testLabService = void 0;
const testLab_1 = require("../../../model/testLab");
exports.testLabService = {
    get: async (id) => {
        const data = await testLab_1.testLab.findOne({
            where: {
                id: id
            }
        });
        return data?.toJSON();
    },
    getList: async () => {
        const datatestLab = await testLab_1.testLab.findAll();
        let list = [];
        for (let data of datatestLab) {
            list.push(data.dataValues);
        }
        return list;
    },
};
