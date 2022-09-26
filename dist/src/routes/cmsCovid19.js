"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmsCovid19Route = void 0;
const express_1 = require("express");
const Covid19Controller_1 = __importDefault(require("../module/cms/controller/Covid19Controller"));
class CmsCovid19Route {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new Covid19Controller_1.default();
        this.initializeRouting();
    }
    initializeRouting() {
        this.router.get('/:id', this.controller.get);
        this.router.post('/', this.controller.post);
        this.router.put('/:id', this.controller.update);
        this.router.delete('/:id', this.controller.delete);
    }
}
exports.CmsCovid19Route = CmsCovid19Route;
