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

  ngOnInit(): void {
  }

  register(): void {
    if (this.registrationForm.value.password === this.registrationForm.value.confirmPassword) {
    }
  }

}
