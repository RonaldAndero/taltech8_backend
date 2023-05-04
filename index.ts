import express, { Express, Request, Response } from "express";
import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productlistController from "./controllers/productlist";
import parcelmachinesController from "./controllers/parcelmachines";
import npsPriceController from "./controllers/npsPrice";
import paymentController from "./controllers/payment";
import cors from "cors";
import bodyParser from "body-parser";


const app: Express = express();

app.use(cors())

app.use(cors({
    origin: ['http://localhost:3006']
}));


app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productlistController);
app.use('/', parcelmachinesController)
app.use('/', npsPriceController)
app.use('/', paymentController)

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});