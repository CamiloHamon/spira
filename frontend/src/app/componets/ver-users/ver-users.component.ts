import { VerUsersService } from '../../services/ver-users.service'
import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-users',
  templateUrl: './ver-users.component.html',
  styleUrls: ['./ver-users.component.css']
})
export class VerUsersComponent implements OnInit {
  alumnos: any = [];

  constructor(private verUsersS: VerUsersService, private router: Router) { }

  ngOnInit(): void {
    this.verUsersS.getUsers()
      .subscribe(
        res =>{
          this.alumnos = res;
        },
        err => console.log(err)
      );
  }

}
