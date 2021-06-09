import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerInfoUserService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  getUser(id:any) {
    return this.http.get<any>(this.URL + '/student/' + id );
  }
}
