"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testLab = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const index_1 = require("./index");
exports.testLab = index_1.sequelize.define("testlab", {
    id: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    testLabName: {
        type: sequelize_1.default.STRING,
        unique: true
    }
}, {
    paranoid: true,
    freezeTableName: true
});
