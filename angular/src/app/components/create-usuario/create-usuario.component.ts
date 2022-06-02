import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuariosI } from 'src/app/models/usuarios';


@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {


  public formulario: FormGroup = this.formBuilder.group(
    {
      nombre : ['', [Validators.required]],
      apellidos : ['', [Validators.required]],
      direccion : ['', [Validators.required]],
      telefono : ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    const formValue: UsuariosI = this.formulario.value
    this.usuariosService.createUsuario(formValue).subscribe(
      () => {
        this.router.navigateByUrl('/usuarios')
      }
    )
    console.log('OnSubmit called')
  }

}