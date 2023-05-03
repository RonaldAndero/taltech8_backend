import { Request, Response, Router } from "express";
import { Toode } from "../models/Toode";

const router: Router = Router();

let toode: Toode | null = new Toode(1, "Koola", 1.5, true);

router.get("/toode", (req: Request, res: Response) =>  {
    res.send(toode)
});

router.get("/kustuta-toode", (req: Request, res: Response) =>  {
    toode = null;
    res.send(toode)
});

router.get("/kustuta-toode2", (req: Request, res: Response) =>  {
    toode = null;
    res.send("Edukalt kustutatud");
});

router.get("/suurenda-hinda", (req: Request, res: Response) =>  {
    if (toode !== null) {
        toode.price = toode.price + 1;
    }
    res.send(toode);
});

router.get("/muuda-aktiivsus", (req: Request, res: Response) => {
    if (toode !== null) {
        toode.isActive = !toode.isActive;
        res.send(toode);
    } else {
        res.status(404).send("Toode ei ole leitud.");
    }
});

router.get("/muuda-nimi/:uusNimi", (req: Request, res: Response) => {
    if (toode !== null) {
        toode.name = req.params.uusNimi;
    }
    res.send(toode);
});
export default router;