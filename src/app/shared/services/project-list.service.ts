import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Array<Project>> {
    const { API_URL } = environment;
    const url = `${API_URL}/projects`;
    return this._http.get<Array<Project>>(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  delete(project: Project) {
    const { API_URL } = environment;
    const url = `${API_URL}/projects/${project.id}`;
    return this._http.delete<Array<Project>>(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}
