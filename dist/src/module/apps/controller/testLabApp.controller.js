"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testLabAppController = void 0;
const testLabApp_service_1 = require("../service/testLabApp.service");
class testLabAppController {
    constructor() {
        this.getTestLab = async (req, res, next) => {
            const id = parseInt(req.params.id);
            const testLabFacility = await testLabApp_service_1.testLabService.get(id);
            res.json(testLabFacility);
        };
        this.getListTestLab = async (req, res, next) => {
            const testLabList = await testLabApp_service_1.testLabService.getList();
            res.json(testLabList);
        };
    }
}
exports.testLabAppController = testLabAppController;
