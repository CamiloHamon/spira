import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './componets/signup/signup.component';
import { SigninComponent } from './componets/signin/signin.component';
import { CursosComponent } from './componets/cursos/cursos.component';
import { AdministradorComponent } from './componets/administrador/administrador.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CrearUserComponent } from './componets/crear-user/crear-user.component';
import { VerUsersComponent } from './componets/ver-users/ver-users.component';
import { VerInfoUserComponent } from './componets/ver-info-user/ver-info-user.component';
import { AsigCursoComponent } from './componets/asig-curso/asig-curso.component';
import { DeleteCursoComponent } from './componets/delete-curso/delete-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CursosComponent,
    AdministradorComponent,
    CrearUserComponent,
    VerUsersComponent,
    VerInfoUserComponent,
    AsigCursoComponent,
    DeleteCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
