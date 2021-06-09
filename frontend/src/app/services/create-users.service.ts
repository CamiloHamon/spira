import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUsersService {
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  createUser(user:any) {
    return this.http.post<any>(this.URL + '/student', user);
  }
}
