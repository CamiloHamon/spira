import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user:any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol')
    return this.router.navigate(['/signin'])
  }

  isAdmin(){
    const validate = localStorage.getItem('rol');
    if(validate && validate == '1') return true;
    else return false;
  }
}
