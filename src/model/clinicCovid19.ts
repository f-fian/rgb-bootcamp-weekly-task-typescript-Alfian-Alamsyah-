import Sequelize from "sequelize";
import { sequelize } from "./index";


export const clinicCovid19 = sequelize.define("cc",{
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
    covid19Id:{
        type:Sequelize.INTEGER,
        references:{
            model:"covid19",
            key:"id"
        }
    }
    
    
    },{
        paranoid:true,
        freezeTableName:true
    },
    
)