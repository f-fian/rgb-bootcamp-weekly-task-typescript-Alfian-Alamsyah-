import express, { Express } from "express";
import dotenv from "dotenv";
import Route from './src/routes/index';

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT;
app.use(express.json())

app.listen(port, () => {
    console.log(`Application is running at localhost:${port}`);
});


const router = new Route(app);
app.use('/', router.router);



