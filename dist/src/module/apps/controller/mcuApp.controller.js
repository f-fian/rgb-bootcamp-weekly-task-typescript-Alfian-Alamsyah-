"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcuAppController = void 0;
const mcuApp_service_1 = require("../service/mcuApp.service");
class mcuAppController {
    constructor() {
        this.getMcu = async (req, res, next) => {
            const id = parseInt(req.params.id);
            const mcuFacility = await mcuApp_service_1.mcuAppService.get(id);
            res.json(mcuFacility);
        };
        this.getListMcu = async (req, res, next) => {
            const mcuList = await mcuApp_service_1.mcuAppService.getList();
            res.json(mcuList);
        };
    }
}
exports.mcuAppController = mcuAppController;
