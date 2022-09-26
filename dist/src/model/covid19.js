"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.covid19 = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const index_1 = require("./index");
exports.covid19 = index_1.sequelize.define("covid19", {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    covidTestName: {
        type: sequelize_1.default.STRING,
        unique: true
    },
    avgPrice: {
        type: sequelize_1.default.STRING
    },
}, {
    paranoid: true,
    freezeTableName: true
});
