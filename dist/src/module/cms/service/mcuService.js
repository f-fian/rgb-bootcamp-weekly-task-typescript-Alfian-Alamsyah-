"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcuCms = void 0;
const mcu_1 = require("../../../model/mcu");
// interface getMcu{
//     id:number,
//     packageName:string,
//     createdAt:any,
//     updatedAt:any,
//     deletedAt:any
// }
exports.mcuCms = {
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
    post: async (id, packageName) => {
        let data = await mcu_1.mcu.create({
            id: id,
            packageName: packageName,
        });
        return data.toJSON();
    },
    update: async (id, packageName) => {
        await mcu_1.mcu.update({ packageName: packageName }, { where: { id: id } });
        const newMcu = await mcu_1.mcu.findOne({ where: { id: id } });
        await console.log(newMcu);
        return newMcu?.toJSON();
    },
    delete: async (id) => {
        await mcu_1.mcu.destroy({ where: { id: id } });
    },
};
