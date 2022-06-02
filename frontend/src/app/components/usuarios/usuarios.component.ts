import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { UsuariosI } from 'src/app/models/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: UsuariosI [] = []
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarUsuarios()
  }

  mostrarUsuarios() {
    this.usuariosService.getAllUsuarios().subscribe(
      {
        next: (data) => {
          this.usuarios = data.usuarios
          console.log(this.usuarios)
        }
      }
    )
  }
}