import Sequelize from "sequelize";
import {clinicData,covid19Data,mcuData,testLabData} from "../data/data"

export const sequelize = new Sequelize.Sequelize(
  'type',
  'root',
  '1234567',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
);

import {clinic} from "./clinic"
import {covid19} from "./covid19"
import {mcu} from "./mcu"
import {testLab} from "./testLab"
import {clinicCovid19} from "./clinicCovid19"
import {clinicMcu} from "./clinicMcu"
import {clinicTestLab} from "./clinicTestLab"
import {createSeeder} from "../data/seeder"


async function dropTable(){
  await clinicCovid19.drop()
  await clinicMcu.drop()
  await clinicTestLab.drop()
  await clinic.drop()
  await covid19.drop()
  await mcu.drop()
  await testLab.drop()
}

async function tableRelation(){
  await clinic.hasMany(clinicCovid19)
  await clinicCovid19.belongsTo(clinic)

  
  await clinic.hasMany(clinicMcu)
  await clinicMcu.belongsTo(clinic)
  await clinic.hasMany(clinicTestLab)
  await clinicTestLab.belongsTo(clinic)
  
  await covid19.hasMany(clinicCovid19)
  await clinicCovid19.belongsTo(covid19)
  await mcu.hasMany(clinicMcu)
  await clinicMcu.belongsTo(mcu)
  await testLab.hasMany(clinicTestLab)
  await clinicTestLab.belongsTo(testLab)
}

async function createTable(){
  await clinic.sync()
  await covid19.sync()
  await mcu.sync()
  await testLab.sync()
  await clinicCovid19.sync()
  await clinicMcu.sync()
  await clinicTestLab.sync()
}

sequelize.authenticate().then(async () => {
  console.log("EMGN servernya jalan DARI MANA ddNJIR-----------------------------------------------")
  // await dropTable()
  // await tableRelation()
  // await createTable()
  // await createSeeder()
  }
  ).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});












