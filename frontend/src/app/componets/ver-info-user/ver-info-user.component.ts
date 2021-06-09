import { VerInfoUserService } from '../../services/ver-info-user.service'
import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-ver-info-user',
  templateUrl: './ver-info-user.component.html',
  styleUrls: ['./ver-info-user.component.css']
})

export class VerInfoUserComponent implements OnInit {
  alumno: any = []
  cursos: any = []

  constructor(private verInfoS: VerInfoUserService, private router: Router, private rutaActiva: ActivatedRoute) { }
  
  ngOnInit(): void {
    const idUser = this.rutaActiva.snapshot.params.idUser;
    const idCurso = this.rutaActiva.snapshot.params.idCurso;
    this.verInfoS.getUser(idUser)
      .subscribe(
        res =>{
          this.alumno = res.alumno;
          this.cursos = res.cursos;
        },
        err => console.log(err)
      );
  }

}
