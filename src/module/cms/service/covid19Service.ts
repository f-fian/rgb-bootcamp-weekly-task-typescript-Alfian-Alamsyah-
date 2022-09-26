import {covid19} from "../../../model/covid19"


interface newCLinic{
    name:string,
    address:string,
    city:string
}


export const covid19Cms = {

    get: async (id:number)=>{
        const data = await covid19.findOne({
            where:{
                id:id
            }
        })
        console.log(data);
        return data?.toJSON()
    },

    post: async (id:number,covidTestName:string,avgPrice:number)=>{
        let data = await covid19.create({
            id:id,
            covidTestName:covidTestName,
            avgPrice:avgPrice
        })
        return data.toJSON()
    },

    update: async (id:number,covidTestName:string,avgPrice:number)=>{
        await covid19.update(
            {covidTestName:covidTestName,avgPrice:avgPrice},
            {where:{id:id}}
        )
        const newCovid19 = await covid19.findOne(
            {where:{id:id}}
        )
        console.log(newCovid19);
        return newCovid19
    },

    delete: async (id:number)=>{
        await covid19.destroy(
            {where:{id:id}}
        )
        // console.log("aa")
        // console.log(newCLinic)

        // return newCLinic
    },
}