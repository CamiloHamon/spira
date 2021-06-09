import { CreateUsersService } from '../../services/create-users.service'
import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {
  user = {
    name:'',
    email: '',
    tel:'',
    pass: ''
  }
  constructor(private createUserS: CreateUsersService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(){
    this.createUserS.createUser(this.user)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['ver-usuarios'])
          alert('Usuario agregado')
        },
        err => {
          //Crear un alerta de que ha quedado mal algo
          console.log(err)
        }
      )
  }
  
}
