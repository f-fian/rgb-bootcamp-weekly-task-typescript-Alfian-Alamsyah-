"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./src/routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.APP_PORT;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Application is running at localhost:${port}`);
});
const router = new index_1.default(app);
app.use('/', router.router);
