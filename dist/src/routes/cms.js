"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cms_controller_1 = __importDefault(require("../module/cms/controller/cms.controller"));
class CmsRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new cms_controller_1.default();
        this.initializeRouting();
    }
    initializeRouting() {
        this.router.get('/', this.controller.get);
        this.router.post('/', this.controller.post);
        this.router.put('/:id', this.controller.update);
        this.router.delete('/:id', this.controller.delete);
    }
}
exports.default = CmsRoute;
