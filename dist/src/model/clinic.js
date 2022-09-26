"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinic = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const index_1 = require("./index");
exports.clinic = index_1.sequelize.define("clinic", {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.default.STRING,
        unique: true
    },
    address: {
        type: sequelize_1.default.STRING
    },
    city: {
        type: sequelize_1.default.STRING
    }
}, {
    paranoid: true,
    freezeTableName: true
});
