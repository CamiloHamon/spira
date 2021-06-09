import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DeleteCursoService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  deleteCurso(id:any){
    return this.http.delete<any>(this.URL + '/cursosAlum/' + id)
  }
}
