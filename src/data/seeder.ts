import {clinicData,covid19Data,mcuData,testLabData} from "./data"
import {clinic} from "../model/clinic"
import {covid19} from "../model/covid19"
import {mcu} from "../model/mcu"
import {testLab} from "../model/testLab"
import {clinicCovid19} from "../model/clinicCovid19"
import {clinicMcu} from "../model/clinicMcu"
import {clinicTestLab} from "../model/clinicTestLab"
// import { sequelize } from "../model/index";


export async function createSeeder(){
    await clinic.bulkCreate(clinicData)
    await covid19.bulkCreate(covid19Data)
    await mcu.bulkCreate(mcuData)
    await testLab.bulkCreate(testLabData)

    for (let data of clinicData){
        for (let data2 of covid19Data){
            await clinicCovid19.create({
                clinicId:data.id,
                covid19Id:data2.id
            })
        }

    }
    for (let data of clinicData){
        for (let data2 of mcuData){
            await clinicMcu.create({
                clinicId:data.id,
                mcuId:data2.id
            })
        }

    }
    for (let data of clinicData){
        for (let data2 of testLabData){
            await clinicTestLab.create({
                clinicId:data.id,
                testlabId:data2.id
            })
        }

    }
}


