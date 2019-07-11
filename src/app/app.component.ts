import { Component, ViewChild, TemplateRef } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:String = 'App - Project';
  isCollapsed:boolean = false;
  constructor(public _authService:AuthenticationService){}
}
