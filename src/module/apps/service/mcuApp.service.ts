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


export const mcuAppService = {
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
    getList: async ()=>{
        const dataMcu:any = await mcu.findAll()
        let list:Array<any> = [ ]
       
        for (let data of dataMcu){
            list.push(data.dataValues)
        }

        return list
    },
}