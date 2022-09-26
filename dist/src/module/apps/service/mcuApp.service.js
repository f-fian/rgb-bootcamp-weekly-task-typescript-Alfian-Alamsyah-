"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcuAppService = void 0;
const mcu_1 = require("../../../model/mcu");
// interface getMcu{
//     id:number,
//     packageName:string,
//     createdAt:any,
//     updatedAt:any,
//     deletedAt:any
// }
exports.mcuAppService = {
    get: async (id) => {
        const data = await mcu_1.mcu.findOne({
            where: {
                id: id
            }
        });
        // ini kenapa
        // @ts-ignore
        return data?.dataValues;
    },
    getList: async () => {
        const dataMcu = await mcu_1.mcu.findAll();
        let list = [];
        for (let data of dataMcu) {
            list.push(data.dataValues);
        }
        return list;
    },
};
