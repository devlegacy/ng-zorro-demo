import { Component, ViewChild, TemplateRef } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:String = 'App - Project';
  isCollapsed:boolean = false;
  constructor(public _authService:AuthenticationService, public _router:Router){}

  logout() {
    this._authService.logOut();
    this._router.navigate(['/login']);
  }
}
