import { FormGroup, FormControl } from '@angular/forms';

/**
 * Registration form.
 */
export class RegistrationForm {
    public registrationForm = new FormGroup({
        /**
         * FIrst name input field.
         */
        firstName: new FormControl(''),

        /**
         * Last name input field.
         */
        lastName: new FormControl(''),

        /**
         * Email input field.
         */
        email: new FormControl(''),

        /**
         * Password input field.
         */
        password: new FormControl(''),

        /**
         * Confirm password input field.
         */
        confirmPassword: new FormControl(''),

        /**
         * Phone number input field.
         */
        phoneNumber: new FormControl(''),

        /**
         * Roles input field.
         */
        roles: new FormControl(''),
    });
}
