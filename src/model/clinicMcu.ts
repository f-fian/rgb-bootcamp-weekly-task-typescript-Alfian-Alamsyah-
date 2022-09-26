import Sequelize from "sequelize";
import { sequelize } from "./index";


export const clinicMcu = sequelize.define("cm",{
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
    mcuId:{
        type:Sequelize.INTEGER,
        references:{
            model:"mcu",
            key:"id"
        }
    }
    },{
        paranoid:true,
        freezeTableName:true
    }
)