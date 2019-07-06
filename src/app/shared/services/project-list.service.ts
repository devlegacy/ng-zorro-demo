import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Array<Project>> {
    const url = 'http://localhost:8089/projects';
    return this._http.get<Array<Project>>(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
