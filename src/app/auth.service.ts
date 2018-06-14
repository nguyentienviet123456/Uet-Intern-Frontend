import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from './model/constants';

@Injectable()
export class AuthService {
  private _urlLogin = Constants.BaseUrl + "/api/auth/login";
  private _urlGetUserByToken = Constants.BaseUrl + "/api/auth/account";
  private getUserByTokenUrl = '';
  private token = '';
  constructor(private _http: Http) { }
  /**
   * @returns any
   */
  logout(): any {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  /**
   * @returns any
   */
  getUser(): any {
    return localStorage.getItem('token');
  }
  
  /**
   * @returns boolean
   */
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
  
  /**
   * @param  {} token
   * @param  {} role
   * @param  {} id
   */
  public StoreUserData(token) {
    localStorage.setItem('token', token);
  }

  /**
   * @param  {} user
   */
  public AuthenticateUser(username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post(this._urlLogin, {username: username, password: password}, { headers: headers })
      .map(res => res.json());
  }
  
  /**
   * @param  {string} token
   */
  public GetUserByToken(token: string){
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', token);
    return this._http.get(this._urlGetUserByToken, { headers: headers })
      .map(res => res.json());
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
