import {clinic} from "../../../model/clinic"
import {covid19} from "../../../model/covid19"
import {clinicCovid19} from "../../../model/clinicCovid19"
import {mcu} from "../../../model/mcu"
import {clinicMcu} from "../../../model/clinicMcu"
import { testLab } from "../../../model/testLab"
import {clinicTestLab} from "../../../model/clinicTestLab"

async function getDataClinic(id:number):Promise<any>{
    const findClinic:any = await clinic.findOne({
        where:{
            id:id
        },
        raw:true
    })
    return findClinic
}

async function makeConnection(){
    await clinicMcu.belongsTo(mcu);
    await clinicMcu.belongsTo(clinic);
    await clinicCovid19.belongsTo(covid19);
    await clinicCovid19.belongsTo(clinic);
    await clinicTestLab.belongsTo(testLab);
    await clinicTestLab.belongsTo(clinic);
}


async function getDataMcu(id:number){
    const findClinicMcuFacility:any = await clinicMcu.findAll({
        where:{
            clinicId:id
        },
        include:[mcu,clinic],
        raw:true
    })
    let listMcu:Array<number> = []       
    for (let data of findClinicMcuFacility){
        listMcu.push(data.mcuId)}

    const findMcuFacility:any = await mcu.findAll({
        where:{
            id:listMcu
        }
    })
    let facilityMcuList:Array<string> = []
    for (let data of findMcuFacility){
        facilityMcuList.push(data.dataValues.packageName)
    }

    return facilityMcuList

}


async function getDataTestLab(id:number) {
    const findClinicTestLabFacility:any = await clinicTestLab.findAll({
        where:{
            clinicId:id
        },
        include:[testLab,clinic],
        raw:true
    })
    let listTestLab:Array<number> = []       
    for (let data of findClinicTestLabFacility){
        listTestLab.push(data.testlabId)}

    const findTestLabFacility:any = await testLab.findAll({
        where:{
            id:listTestLab
        }
    })
    let facilityTestLab:Array<string> = []
    for (let data of findTestLabFacility){
        facilityTestLab.push(data.dataValues.testLabName)
    }

    return facilityTestLab
}

async function getDataCovid19(id:number) {
    const findClinicCovid19Facility:any = await clinicCovid19.findAll({
        where:{
            clinicId:id
        },
        include:[clinic,covid19],
        raw:true
    })

    
    let listCovid19:Array<number> = []       
    for (let data of findClinicCovid19Facility){
        listCovid19.push(data.covid19Id)
    }


    
    const findCovid19Facility:any = await covid19.findAll({
        where:{
            id:listCovid19
        }
    })
    let facilityCoivid19List:Array<string> = []
    for (let data of findCovid19Facility){
        facilityCoivid19List.push(data.dataValues.covidTestName)}
    
    return facilityCoivid19List
}


export const clinicAppService = {

    get: async (id:number):Promise<any>=>{
        
        const {name,address,city} = await getDataClinic(id)
        await makeConnection()
        let facilityMcuList = await getDataMcu(id)
        let facilityTestLab = await getDataTestLab(id)
        let facilityCoivid19List = await getDataCovid19(id)
        
        const result = {   
            id:id,
            name:name,
            address:address,
            city:city,
            facility:{
                mcu:facilityMcuList,
                covid19:facilityCoivid19List,
                testLab:facilityTestLab
            }
        }
        return result
    },


    getListClinic: async ()=>{

        const dd:any = await clinic.findAll({
            attributes: ['id'],
            raw:true
        })

        let listId:Array<number> = []
        for (let data of dd){
            listId.push(data.id)
        }
        console.log(listId);

        let listAllClinicFacility:Array<any> = []

        for (let x = 0; x < listId.length; x++ ){

            const {id,name,address,city} = await getDataClinic(listId[x])
            console.log(id);
            await makeConnection()
            let facilityMcuList = await getDataMcu(listId[x])
            let facilityTestLab = await getDataTestLab(listId[x])
            let facilityCoivid19List = await getDataCovid19(listId[x])
            
            const result = {   
                id:id,
                name:name,
                address:address,
                city:city,
                facility:{
                    mcu:facilityMcuList,
                    covid19:facilityCoivid19List,
                    testLab:facilityTestLab
                }
            }

            listAllClinicFacility.push(result)
        }

       
        return listAllClinicFacility


        



    
    

    }
}