import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  hasSession: boolean = false;
  user = null;
  API_URL = environment.API_URL;

  constructor(public _http: HttpService, public _locker: SessionStorageService) { }

  public isLoggedIn() {
    const user = this._locker.retrieve('user');
    if (!!user) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public logIn(username: string, password: string) {
    const url = `${this.API_URL}/users/login`;
    return this._http.post(url, { username, password, });
  }

  public logOut() {
    this.user = null;
    this.hasSession = false;
    this._locker.clear('user');
  }
}
