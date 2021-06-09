import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AsigCursoService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  getHorarios(){
    return this.http.get<any>(this.URL + '/horarios')
  }

  getCursos(){
    return this.http.get<any>(this.URL + '/cursos/all');
  }

  addCurso(id:any, cursos:any) {
    return this.http.post<any>(this.URL + '/cursosAlum/' + id, cursos);
  }
}
