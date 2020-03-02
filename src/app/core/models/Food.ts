import { Ingradient } from "./Ingradient";

export class Food {
    constructor(
        public id: number,
        public name: string,
        public type: string,
        public price: number,
        public preview: string,
        public ingradients: Ingradient[],
        public description: string,
        public images: string[]
    ) {}
}
