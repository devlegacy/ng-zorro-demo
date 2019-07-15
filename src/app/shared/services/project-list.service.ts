import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService extends HttpService {

  constructor(public _http: HttpClient, public _authService: AuthenticationService) {
    super(_http);
  }

  getAll(): Observable<Array<Project>> {
    // const { API_URL } = environment;
    const url = `${this.API_URL}/projects`;
    const token = this._authService.user.api_token;
    // return this._http.get<Array<Project>>(url, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });

    return this.get(url, token);
  }

  deleteProject(project: Project) {
    // const { API_URL } = environment;
    const url = `${this.API_URL}/projects/${project.id}`;
    const token = this._authService.user.api_token;
    // return this._http.delete<Array<Project>>(url, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });

    return this.delete(url, token);
  }

  createProject(project:Project) {
    const url = `${this.API_URL}/projects`;
    const token = this._authService.user.api_token;

    return this.post(url,project, token);
  }
}
