import {sequelize} from "../../../model/index"
import {clinic} from "../../../model/clinic"
import {testLab} from "../../../model/testLab"
import {mcu} from "../../../model/mcu"

// interface getMcu{
//     id:number,
//     packageName:string,
//     createdAt:any,
//     updatedAt:any,
//     deletedAt:any
// }


export const mcuCms = {
    get: async (id:number):Promise<any>=>{
        const data = await mcu.findOne({
            where:{
                id:id
            }
        })
        // ini kenapa
        // @ts-ignore
        return data?.dataValues
    },
    post: async (id:number,packageName:string)=>{
        let data = await mcu.create({
            id:id,
            packageName:packageName,
        })
        return data.toJSON()
    },
    update: async (id:number,packageName:string)=>{
        await mcu.update(
            {packageName:packageName},
            {where:{id:id}}
        )

        const newMcu = await mcu.findOne(
            {where:{id:id}}
        )
        await console.log(newMcu);
        return newMcu?.toJSON()
    },

    delete: async (id:number)=>{
        await mcu.destroy(
            {where:{id:id}}
        )
    },
}