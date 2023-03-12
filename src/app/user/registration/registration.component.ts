import { RegistrationForm } from './../../core/form/user/RegistrationForm';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup = new RegistrationForm().registrationForm;

  constructor(
  ) { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
  }

  /**
   * Registration
   */
  register(): void {
    if (
      this.registrationForm.valid &&
      this.registrationForm.value.password === this.registrationForm.value.confirmPassword) {
    }
  }

}
