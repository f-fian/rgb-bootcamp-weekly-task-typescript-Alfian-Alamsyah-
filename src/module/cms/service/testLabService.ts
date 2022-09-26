import {sequelize} from "../../../model/index"
import {clinic} from "../../../model/clinic"
import {testLab} from "../../../model/testLab"


interface newCLinic{
    name:string,
    address:string,
    city:string
}


export const testLabCms = {

    get: async (id:number)=>{
        const data = await testLab.findOne({
            where:{
                id:id
            }
        })

        console.log(data);

        
        return data?.toJSON()
    },

    post: async (id:number,testLabName:string)=>{
        let data = await testLab.create({
            id:id,
            testLabName:testLabName,
        })
        return data.toJSON()
    },

    update: async (id:number,name:string)=>{
        await testLab.update(
            {testLabName:name},
            {where:{id:id}}
        )
        const newTestLab = await testLab.findOne(
            {where:{id:id}}
        )
        console.log(newTestLab);
        return newTestLab
    },

    delete: async (id:number)=>{
        await testLab.destroy(
            {where:{id:id}}
        )
        // console.log("aa")
        // console.log(newCLinic)

        // return newCLinic
    },
}