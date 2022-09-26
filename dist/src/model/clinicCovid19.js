"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicCovid19 = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const index_1 = require("./index");
exports.clinicCovid19 = index_1.sequelize.define("cc", {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clinicId: {
        type: sequelize_1.default.INTEGER,
        references: {
            model: "clinic",
            key: "id"
        }
    },
    covid19Id: {
        type: sequelize_1.default.INTEGER,
        references: {
            model: "covid19",
            key: "id"
        }
    }
}, {
    paranoid: true,
    freezeTableName: true
});
