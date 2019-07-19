import { Ingradient } from "./Ingradient";

export class Food {
    id: number;
    name: string;
    type: string;
    price: number;
    preview: string;
    ingradients: Ingradient[];
    description: string;
    images: string[];
}