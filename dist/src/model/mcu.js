"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcu = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const index_1 = require("./index");
exports.mcu = index_1.sequelize.define("mcu", {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    packageName: {
        type: sequelize_1.default.STRING,
        unique: true
    }
}, {
    paranoid: true,
    freezeTableName: true
});
