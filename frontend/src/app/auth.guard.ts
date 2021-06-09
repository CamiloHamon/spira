import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private authService: AuthService){}

  canActivate(): boolean{
    if(this.authService.loggedIn()){
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
   
  }
  
}
