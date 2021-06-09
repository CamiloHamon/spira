import { DeleteCursoService } from '../../services/delete-curso.service'
import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-delete-curso',
  templateUrl: './delete-curso.component.html',
  styleUrls: ['./delete-curso.component.css']
})
export class DeleteCursoComponent implements OnInit {

  constructor(private deleteCursos: DeleteCursoService, private router: Router, private rutaActiva: ActivatedRoute) { }
  

  ngOnInit(): void {
    const idUser = this.rutaActiva.snapshot.params.idUser;
    const idCurso = this.rutaActiva.snapshot.params.idCurso;
    this.deleteCursos.deleteCurso(idCurso)
      .subscribe(
        res =>{
          this.router.navigate([`/info-user/${idUser}`])
          alert('Curso eliminado.')
        },
        err => console.log(err)
      );
  }

}
