import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { CreateEjemplaresComponent } from './components/create-ejemplares/create-ejemplares.component';
import { CreateLibrosComponent } from './components/create-libros/create-libros.component';
import { CreatePrestarComponent } from './components/create-prestar/create-prestar.component';
import { CreateUsuarioComponent } from './components/create-usuario/create-usuario.component';
import { EjemplaresComponent } from './components/ejemplares/ejemplares.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PrestarComponent } from './components/prestar/prestar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const routes: Routes = [
  {path:'usuarios', component: UsuariosComponent},
  {path:'libros', component: LibrosComponent},
  {path:'ejemplares', component: EjemplaresComponent},
  {path:'prestar', component: PrestarComponent},
  {path:'createUsuario', component: CreateUsuarioComponent},
  {path:'createLibro', component: CreateLibrosComponent},
  {path:'createEjemplar', component: CreateEjemplaresComponent},
  {path:'createPrestar', component: CreatePrestarComponent},
  {path:'consultas', component:ConsultasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
