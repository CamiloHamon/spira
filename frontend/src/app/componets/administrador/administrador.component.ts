import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {Router} from '@angular/router'

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private authServive: AuthService, private router: Router) { }

  ngOnInit(): void {
    const val = this.authServive.isAdmin()
    if(!val) this.router.navigate(['/mis-cursos']);
    else this.router.navigate(['/ver-usuarios'])
  }

}
