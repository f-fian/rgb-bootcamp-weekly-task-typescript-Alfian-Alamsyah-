import Sequelize from "sequelize";
import { sequelize } from "./index";

export const mcu = sequelize.define("mcu",{
  id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  packageName:{
      type:Sequelize.STRING,
      unique:true
  }
},{
  paranoid:true,
  freezeTableName:true
  }
)





