"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicMcu = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const index_1 = require("./index");
exports.clinicMcu = index_1.sequelize.define("cm", {
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
    mcuId: {
        type: sequelize_1.default.INTEGER,
        references: {
            model: "mcu",
            key: "id"
        }
    }
}, {
    paranoid: true,
    freezeTableName: true
});
