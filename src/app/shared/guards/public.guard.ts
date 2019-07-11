import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate{

  constructor(public _authService: AuthenticationService, public _router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this._authService.isLoggedIn()) {
      return true;
    }

    console.warn('Usuario autenticado');

    this._router.navigate(['/home']);

    return false;
  }

}
