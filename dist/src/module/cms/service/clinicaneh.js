"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clinic = void 0;
const index_1 = require("../../../model/index");
exports.clinic = {
    create: (d) => {
        index_1.sequelize.authenticate().then(async () => {
            exports.clinic.create({
                name: "Tempat Baru",
                address: "Sukabumi Timur",
                city: "Sukabumi"
            });
        });
    }
};
