import {sequelize} from "../../../model/index"
import {clinic} from "../../../model/clinic"
import {clinicCovid19} from "../../../model/clinicCovid19"
import {clinicMcu} from "../../../model/clinicMcu"
import {clinicTestLab} from "../../../model/clinicTestLab"



// interface newCLinic{
//     name:string,
//     address:string,
//     city:string
// }

export const clinicCms = {
    
    create: async (id:number,name:string,address:string,city:string,
                  mcu:Array<any>,covid19:Array<any>,testLab:Array<any>):Promise<any>=>{
        
       console.log("alfian")

       const t = await sequelize.transaction()

       try {
            const newClinic = await clinic.create({
                id:id,
                name:name,
                address:address,
                city:city
            },{transaction:t})
            console.log(newClinic);

            const arrayClinicCovid19:Array<any> = []
            const arrayClinicMcu:Array<any> = []
            const arrayClinicTestLab:Array<any> = []

            for (let data of mcu){
                arrayClinicMcu.push({clinicId:id,mcuId:data})
            }
            const newClinicMcu = await clinicMcu.bulkCreate(arrayClinicMcu,{transaction:t})
            console.log(newClinicMcu);
/////////////////////////////////
            for (let data of covid19){
                arrayClinicCovid19.push({clinicId:id,covid19Id:data})
            }
            const newClinicCovid19 = await clinicCovid19.bulkCreate(arrayClinicCovid19,{transaction:t})
            console.log(newClinicCovid19);
///////////////////////////////////////
            for (let data of testLab){
                arrayClinicTestLab.push({clinicId:id,testlabId:data})
            }
            const newClinicTestLab = await clinicTestLab.bulkCreate(arrayClinicTestLab,{transaction:t})
            console.log(newClinicTestLab);
            
            await t.commit()
            console.log("berhasil?");

    }catch(error){
        console.log("tidak berhasil")
        console.log(error);
}

},





    update: async (id:number,name:string,address:string,city:string)=>{
        await clinic.update(
            {name:name,address:address,city:city},
            {where:{id:id}}
        )
        const newCLinic = await clinic.findOne(
            {where:{id:id}}
        )
        return newCLinic
    },

    delete: async (id:number)=>{
        await clinic.destroy(
            {where:{id:id}}
        )
        // console.log("aa")
        // console.log(newCLinic)

        // return newCLinic
    },
}