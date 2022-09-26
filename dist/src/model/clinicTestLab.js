"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinicTestLab = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const index_1 = require("./index");
exports.clinicTestLab = index_1.sequelize.define("ct", {
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
    testlabId: {
        type: sequelize_1.default.INTEGER,
        references: {
            model: "testlab",
            key: "id"
        }
    }
}, {
    paranoid: true,
    freezeTableName: true
});
