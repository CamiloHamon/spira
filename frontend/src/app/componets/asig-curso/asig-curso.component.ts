import { AsigCursoService } from '../../services/asig-curso.service'
import { VerInfoUserService } from "../../services/ver-info-user.service";
import { Router } from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asig-curso',
  templateUrl: './asig-curso.component.html',
  styleUrls: ['./asig-curso.component.css']
})
export class AsigCursoComponent implements OnInit {
  alumno: any = [];
  cursos: any = []
  horarios: any = [];
  addCursos: any = { curso: '', horario: '' }


  constructor(private asigCurso: AsigCursoService, private router: Router, private rutaActiva: ActivatedRoute, private verInfoUser: VerInfoUserService) {

  }

  ngOnInit(): void {
    const idUser = this.rutaActiva.snapshot.params.idUser;

    this.verInfoUser.getUser(idUser)
      .subscribe(
        res => {
          this.alumno = res.alumno;

        },
        err => console.log(err)
      );

    this.asigCurso.getCursos()
      .subscribe(
        res => {
          this.cursos = res;
        },
        err => { console.log(err) }
      )

    this.asigCurso.getHorarios()
      .subscribe(
        res => {
          this.horarios = res;
        },
        err => { console.log(err) }
      )
  }


  addCurso() {
    const idUser = this.rutaActiva.snapshot.params.idUser;
    console.log(idUser)
    this.asigCurso.addCurso(idUser, this.addCursos)
      .subscribe(
        res => {
          console.log(res)
          if(res.message){
            alert('El estudiante ya tiene este curso.')
          }else this.router.navigate([`info-user/${idUser}`])
        },
        err => { console.log(err) }
      )
  }

}
