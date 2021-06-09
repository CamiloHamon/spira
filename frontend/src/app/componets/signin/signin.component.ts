import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    pass: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.getToken()) this.router.navigate(['/mis-cursos'])
  }

  signIn() {
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res)
          if (res.token){
            localStorage.setItem('token', res.token)
            localStorage.setItem('rol', res.rol)
            this.router.navigate(['/administrador'])
          }
        },
        err => console.log(err)      
      )
  }

}
