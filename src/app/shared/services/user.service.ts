import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService {

  constructor(public _http: HttpClient, public _authService: AuthenticationService) {
    super(_http);
  }

  getAll(): Observable<any> {
    const url = `${this.API_URL}/users`;
    const token = this._authService.user.api_token;

    return this.get(url, token);
  }
}
