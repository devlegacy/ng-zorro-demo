import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_URL = environment.API_URL;
  constructor(private _http: HttpClient) { }

  public get(url, token): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Api-Token': token,
    };

    return this._http.get(url, {
      headers,
    });
  }

  public post(url, params, token?): Observable<any> {
    const headers = !!token
      ? {
        'Content-Type': 'application/json',
        'Api-Token': token,
      }
      : {
        'Content-Type': 'application/json',
      };
    const body = JSON.stringify(params);
    return this._http.post(url, body, { headers });
  }

  public delete(url, token): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Api-Token': token,
    };
    return this._http.delete(url, { headers });
  }
}
