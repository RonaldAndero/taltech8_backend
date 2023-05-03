import { Request, Response, Router } from "express";
import { Toode } from "../models/Toode";

const router: Router = Router();

const tooted: Toode[] = [
    new Toode(1,"Koola", 1.5, true),
    new Toode(2,"Fanta", 1.0, false),
    new Toode(3,"Sprite", 1.7, true),
    new Toode(4,"Vichy", 2.0, true),
    new Toode(5,"Vitamin well", 2.5, true)
];

router.get("/tooted", (req: Request, res: Response) => {
    res.send(tooted)
});

router.delete("/kustuta-toode/:index", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.index)) {
        tooted.splice(Number(req.params.index),1)
    }
    res.send(tooted)
});

router.delete("/kustuta-toode-variant2/:index", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.index)) {
        tooted.splice(Number(req.params.index),1);
        res.send("Toode kustutatud!");
    } else {
        res.send("Toode kustutamine ei õnnestunud, sisesta number!");
    }
});

router.post("/lisa-toode", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.body.id) && /^[0-9]+$/.test(req.body.price)) {
        tooted.push(
            new Toode(req.body.id, req.body.name, req.body.price, req.body.isActive)
        )
    }
    res.send(tooted)
});

router.patch("/hind-dollaritesse/:kurss", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.kurss)) {
        for (let index = 0; index < tooted.length; index++) {
            tooted[index].price = tooted[index].price * Number(req.params.kurss);
        }
    }
    res.send(tooted)
});

router.delete("/kustuta-koik-tooted", (req: Request, res: Response) => {
    tooted.splice(0, tooted.length);
    res.send("Kõik tooted kustutatud!");
});

router.patch("/muuda-toodete-aktiivsus-valeks", (req: Request, res: Response) => {
    for (let index = 0; index < tooted.length; index++) {
        tooted[index].isActive = false;
    }
    res.send(tooted)
});

router.get("/toode/:index", (req: Request, res: Response) => {
    res.send(tooted[Number(req.params.index)]);
});

router.get("/korgeim-hind", (req: Request, res: Response) => {
    let maxPrice = 0;
    let maxPriceProduct: Toode | undefined;
    for (let i = 0; i < tooted.length; i++) {
        if (tooted[i].price > maxPrice) {
            maxPrice = tooted[i].price;
            maxPriceProduct = tooted[i];
        }
    }
    if (maxPriceProduct) {
        res.send(maxPriceProduct);
    } else {
        res.status(404).send("Tooteid ei leitud");
    }
});

export default router;