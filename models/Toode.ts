export class Toode {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public isActive: boolean
    ) {}
}

export class Kasutaja {
    constructor(
        private _id: number,
        public kasutajanimi: string,
        private _parool: string,
        public eesnimi: string,
        public perenimi: string
    ) {}

}
