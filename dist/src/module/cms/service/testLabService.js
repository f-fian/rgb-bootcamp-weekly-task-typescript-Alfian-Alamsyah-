"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testLabCms = void 0;
const testLab_1 = require("../../../model/testLab");
exports.testLabCms = {
    get: async (id) => {
        const data = await testLab_1.testLab.findOne({
            where: {
                id: id
            }
        });
        console.log(data);
        return data?.toJSON();
    },
    post: async (id, testLabName) => {
        let data = await testLab_1.testLab.create({
            id: id,
            testLabName: testLabName,
        });
        return data.toJSON();
    },
    update: async (id, name) => {
        await testLab_1.testLab.update({ testLabName: name }, { where: { id: id } });
        const newTestLab = await testLab_1.testLab.findOne({ where: { id: id } });
        console.log(newTestLab);
        return newTestLab;
    },
    delete: async (id) => {
        await testLab_1.testLab.destroy({ where: { id: id } });
        // console.log("aa")
        // console.log(newCLinic)
        // return newCLinic
    },
};
