import { FormGroup, FormControl } from '@angular/forms';

/**
 * Dish add/edit form.
 */
export class DishForm {
    public dishForm = new FormGroup({
        /**
         * Name input field.
         */
        name: new FormControl(''),

        /**
         * Type input field.
         */
        type: new FormControl(''),

        /**
         * Price input field.
         */
        price: new FormControl(''),

        /**
         * Preview input field.
         */
        preview: new FormControl(''),

        /**
         * Ingredients input field.
         */
        ingredients: new FormControl(''),

        /**
         * Description input field.
         */
        description: new FormControl(''),

        /**
         * Images input field.
         */
        images: new FormControl(''),
    });
}
