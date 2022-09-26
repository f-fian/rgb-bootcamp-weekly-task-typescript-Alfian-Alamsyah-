import {sequelize} from "../../../model/index"
import {clinic} from "../../../model/clinic"
import {testLab} from "../../../model/testLab"


interface newCLinic{
    name:string,
    address:string,
    city:string
}


export const testLabService = {

    get: async (id:number)=>{
        const data = await testLab.findOne({
            where:{
                id:id
            }
        })
        return data?.toJSON()
    },
    getList: async ()=>{
        const datatestLab:any = await testLab.findAll()
        let list:Array<any> = [ ]
       
        for (let data of datatestLab){
            list.push(data.dataValues)
        }

        return list
    },
}