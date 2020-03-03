/**
 * Ingredient model.
 */
export class Ingredient {
    /**
     * Ingredient id
     * @param id number
     * Ingredient name
     * @param name string
     * Ingredient type
     * @param type string
     */
    constructor(
        public id: number,
        public name: string,
        public type: string,
    ) { }
}
