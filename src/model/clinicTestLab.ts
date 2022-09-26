import Sequelize from "sequelize";
import { sequelize } from "./index";


export const clinicTestLab = sequelize.define("ct",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
    clinicId:{
      type:Sequelize.INTEGER,
      references:{
          model:"clinic",
          key:"id"
      }
    },
    testlabId:{
      type:Sequelize.INTEGER,
      references:{
          model:"testlab",
          key:"id"
      }

    }
    
    },{
        paranoid:true,
        freezeTableName:true
        }
)