import {covid19} from "../../../model/covid19"


interface newCLinic{
    name:string,
    address:string,
    city:string
}


export const covid19AppService = {

    get: async (id:number)=>{
        const data:any = await covid19.findOne({
            where:{
                id:id
            }
        })
        console.log(data);
        return data?.toJSON()
    },

    getList: async ()=>{
        const dataCovid19:any = await covid19.findAll()
        let list:Array<any> = [ ]
       
        for (let data of dataCovid19){
            list.push(data.dataValues)
        }

        return list
    },

}