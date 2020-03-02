import { FormGroup, FormControl } from '@angular/forms';

export class DishForm {
    public dishForm = new FormGroup({
        name: new FormControl(''),
        type: new FormControl(''),
        price: new FormControl(''),
        preview: new FormControl(''),
        ingradients: new FormControl(''),
        description: new FormControl(''),
        images: new FormControl(''),
    });
}
