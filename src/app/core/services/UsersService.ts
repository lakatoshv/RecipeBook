import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalService } from './GlobalsService';
import { Users } from '../data/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /**
   * @param _jwt JwtHelperService
   */
  private _jwt = new JwtHelperService();

  /**
   * @param _tokenService Angular2TokenService
   * @param _globalService GlobalService
   */
  constructor(
    private _tokenService: Angular2TokenService,
    private _globalService: GlobalService
  ) {
      // this._tokenService.init();
  }

  /*
  public registration(model): Observable<any> {
    return this._httpClient.post(HttpClientService.USERS_CONTROLLER, model, null, false, true);
  }
  */

  /**
   * Save user to local storage
   * @param user string
   */
  public saveUser(user: string): void {
    if (user) {
      localStorage.setItem('user', user);
      this._globalService.resetUserData();
    }
  }

  /**
   * Login method
   * @param credentials any
   * @returns string|null
   */
  public login(credentials): string {
    const index = Users.findIndex(item => item.Email === credentials.email || item.Password === credentials.password);
    if (index === -1) {
      return null;
    }

    const user = Users[index];
    delete user.Roles;
    delete user.Password;
    return JSON.stringify(user);
  }

  /**
   * Logout method
   */
  logout(): void {
    localStorage.removeItem('user');
  }

  /**
   * Check if user is logged in
   * @returns boolean
   */
  isLoggedIn(): boolean {
    const token: string = localStorage.getItem('user');
    if (token != null) {
      return true;
    }
    return false;
  }

  /**
   * Get token from local storage
   */
  getToken(): string {
    return localStorage.getItem('token');
  }
}
