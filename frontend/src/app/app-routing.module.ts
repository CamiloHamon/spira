import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { AdministradorComponent } from './componets/administrador/administrador.component';
import { CursosComponent } from './componets/cursos/cursos.component';
import { SignupComponent } from './componets/signup/signup.component';
import { SigninComponent } from './componets/signin/signin.component';
import { CrearUserComponent } from './componets/crear-user/crear-user.component';
import { VerUsersComponent } from './componets/ver-users/ver-users.component';
import { VerInfoUserComponent } from './componets/ver-info-user/ver-info-user.component';
import { AsigCursoComponent } from './componets/asig-curso/asig-curso.component';
import { DeleteCursoComponent } from "./componets/delete-curso/delete-curso.component";

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'administrador',
    component: AdministradorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mis-cursos',
    component: CursosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'crear-usuario',
    component: CrearUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ver-usuarios',
    component: VerUsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'info-user/:idUser',
    component: VerInfoUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-curso/:idUser',
    component: AsigCursoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'eliminar-curso/:idCurso/:idUser',
    component: DeleteCursoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
