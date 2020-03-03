import { FormGroup, FormControl } from '@angular/forms';

/**
 * Authorization form.
 */
export class AuthorizationForm {
    public authorizationForm = new FormGroup({
        /**
         * Email input field.
         */
        email: new FormControl(''),
        /**
         * Password input field.
         */
        password: new FormControl('')
    });
}
