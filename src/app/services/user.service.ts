import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../model/user";
import { Observable } from "rxjs/Rx";
import { Constants } from '../model/constants';

@Injectable()
export class UserService {
  private BaseUrl = Constants.BaseUrl
  private _urlUpdateUser = this.BaseUrl+ "/api/auth/account";
  private _urlGetUser = this.BaseUrl+ "/api/auth/account";
  private _urlLogin = this.BaseUrl+ "api/auth/login";
  private _urlChangePass = this.BaseUrl+ "/api/auth/chang-password";
  private _putUrl = "";
  user: any;
  private authToken = "";
  constructor(private _http: Http) {
    this.loadToken();
  }

  // get students
  getAllUsers() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.authToken);
    return this._http
      .get(this._urlGetUser, { headers: headers })
      .map(res => res.json());
  }

  // register student
  // registerUser(user) {
  //   let headers = new Headers();
  //   headers.append('Content-type', 'application/json');
  //   headers.append('Authorization', this.authToken);
  //   return this._http
  //     .post(this._postUrl, user, { headers: headers })
  //     .map(res => res.json());
  // }

  // update student
  updateUser(user: User) {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.authToken);
    return this._http
      .post(this._urlUpdateUser, user, { headers: headers })
      .map(res => res.json());
  }
  
  // dang ky thuc tap
  // gui nhan thong bao
  // gui bao cao ket qua dinh ky va toan van ban bao cao thuc tap
  // gui toan van ban bao cao bang cach tai file
  // xem danh gia tu doanh nghiep

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = "Bear" + token;
  }
}
