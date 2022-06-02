import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrosI } from 'src/app/models/libros';
import { LibrosService } from 'src/app/services/libros.service';


@Component({
  selector: 'app-create-libros',
  templateUrl: './create-libros.component.html',
  styleUrls: ['./create-libros.component.css']
})
export class CreateLibrosComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      titulo: ['', [Validators.required]],
      numeropagina: ['', [Validators.required]],
      editorial: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      autor: ['', [Validators.required]],
    }
  )


  constructor(
    private formBuilder: FormBuilder,
    private librosService: LibrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formValue: LibrosI = this.formulario.value
    this.librosService.createLibro(formValue).subscribe(
      () => {
        this.router.navigateByUrl('/libros')
      }
    )
  }

}
