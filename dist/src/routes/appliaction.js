"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRoute = void 0;
const express_1 = require("express");
const application_controller_1 = __importDefault(require("../module/apps/controller/application.controller"));
class ApplicationRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new application_controller_1.default();
        this.initializeRouting();
    }
    initializeRouting() {
        this.router.get('/', this.controller.index);
        this.router.post('/', this.controller.create);
    }
}
exports.ApplicationRoute = ApplicationRoute;
