import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthorizationForm } from 'src/app/core/form/user/AuthorizationForm';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/UsersService';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  authorizationForm: FormGroup = new AuthorizationForm().authorizationForm;

  constructor(
    private _router: Router,
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  authorization(dataForAuthorize): void {
    if (this.authorizationForm.valid) {
      const user = this._usersService.login(dataForAuthorize);
      if (user) {
        this.succesLogin(user);
      }
    }
  }

  public succesLogin(user: string): void {
    this._usersService.saveUser(user);
    /*
    const initializeSubscription = this._accountService.initialize(this._globalService._currentUser.Id).subscribe(
        (initializationData) => {
            this._globalService.initializeData(initializationData);
            this._router.navigate(['/']);
        },
        (errorMessage) => {}
    );
    */
  }
}
