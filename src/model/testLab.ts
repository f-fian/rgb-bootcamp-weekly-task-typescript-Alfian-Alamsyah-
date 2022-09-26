import Sequelize from "sequelize";
import { sequelize } from "./index";


export const testLab = sequelize.define("testlab",{
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    testLabName:{
      type:Sequelize.STRING,
      unique:true
  }
},{
  paranoid:true,
  freezeTableName:true
  }
)






