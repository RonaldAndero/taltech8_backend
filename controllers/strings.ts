import { Request, Response, Router } from "express";
import moment from 'moment';

const router: Router = Router();

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/hello-variable/:nimi", (req: Request, res: Response) => {
    res.send("Hello " + req.params.nimi)
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + req.params.nr2)
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
    for (let index = 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index);
    }
    res.send();
});

router.get("/random/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + Math.random() + req.params.nr2);
});

router.get("/bday/:dob", (req: Request, res: Response) => {
    const { dob } = req.params;
    const birthday = moment(dob, 'DD-MM-YYYY');
    const age = moment().diff(birthday, 'years');

    res.send(`Sa oled ${age} aastat vana.`);
});
export default router;