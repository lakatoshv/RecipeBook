import { Injectable } from '@angular/core';
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
   * @param _globalService GlobalService
   */
  constructor(
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
   * @returns void
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
   * @returns string|undefined
   */
  public login(credentials: any): string | undefined {
    const index = Users.findIndex(item => item.Email === credentials.email || item.Password === credentials.password);
    if (index === -1) {
      return undefined;
    }

    const user = Users[index];
    user.Roles = [];
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
    const token: string | null = localStorage.getItem('user');
    if (token != null) {
      return true;
    }
    return false;
  }

  /**
   * Get token from local storage
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
