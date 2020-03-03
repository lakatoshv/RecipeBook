import { Ingredient } from "./Ingredient";

/**
 * Food model.
 */
export class Food {
    /**
     * Food id
     * @param id number
     * Food name
     * @param name string
     * Food type
     * @param type string
     * Food price
     * @param price number
     * Food preview image
     * @param preview string
     * Food ingredients
     * @param ingredients Ingredients[]
     * Food description
     * @param description string
     * Food images
     * @param images string[]
     */
    constructor(
        public id: number,
        public name: string,
        public type: string,
        public price: number,
        public preview: string,
        public ingredients: Ingredient[],
        public description: string,
        public images: string[]
    ) {}
}
