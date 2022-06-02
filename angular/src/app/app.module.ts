import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LibrosComponent } from './components/libros/libros.component';
import { EjemplaresComponent } from './components/ejemplares/ejemplares.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUsuarioComponent } from './components/create-usuario/create-usuario.component';
import { CreateLibrosComponent } from './components/create-libros/create-libros.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEjemplaresComponent } from './components/create-ejemplares/create-ejemplares.component';
import { CreatePrestarComponent } from './components/create-prestar/create-prestar.component';
import { PrestarComponent } from './components/prestar/prestar.component';
import { ConsultasComponent } from './components/consultas/consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsuariosComponent,
    LibrosComponent,
    EjemplaresComponent,
    CreateUsuarioComponent,
    CreateLibrosComponent,
    CreateEjemplaresComponent,
    CreatePrestarComponent,
    PrestarComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
