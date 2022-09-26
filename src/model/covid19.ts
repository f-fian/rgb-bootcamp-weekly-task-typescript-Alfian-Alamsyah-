import Sequelize from "sequelize";
import { sequelize } from "./index";


export const covid19 = sequelize.define("covid19",{
  id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  covidTestName:{
      type:Sequelize.STRING,
      unique:true
  },
  avgPrice:{
      type:Sequelize.STRING
  },
  
},{
  paranoid:true,
  freezeTableName:true
  }
)








