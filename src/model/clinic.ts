import Sequelize from "sequelize";
import { sequelize } from "./index";

export const clinic = sequelize.define("clinic",{
  id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  name:{
      type:Sequelize.STRING,
      unique:true
  },
  address:{
      type:Sequelize.STRING
  },
  city:{
    type:Sequelize.STRING
}

},{
  paranoid:true,
  freezeTableName:true
  }
)






