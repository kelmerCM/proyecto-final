import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EjemplaresService } from 'src/app/services/ejemplares.service';
import { EjemplaresI } from 'src/app/models/ejemplares';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-ejemplares',
  templateUrl: './create-ejemplares.component.html',
  styleUrls: ['./create-ejemplares.component.css']
})
export class CreateEjemplaresComponent implements OnInit {

  public formulario: FormGroup = this.formBuilders.group(
    {
      LibroId: ['', [Validators.required]],
      localizacion: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilders: FormBuilder,
    private ejemplaresService: EjemplaresService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue: EjemplaresI = this.formulario.value

    this.ejemplaresService.createEjemplar(formValue).subscribe(
      () => {
        this.router.navigateByUrl('/ejemplares')
      }
    )
  }

}