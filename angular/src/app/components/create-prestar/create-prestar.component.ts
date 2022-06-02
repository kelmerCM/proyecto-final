import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestarService } from 'src/app/services/prestar.service';
import { PrestarI } from 'src/app/models/prestar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-prestar',
  templateUrl: './create-prestar.component.html',
  styleUrls: ['./create-prestar.component.css']
})
export class CreatePrestarComponent implements OnInit {
  public formulario: FormGroup = this.formBuilder.group(
    {
      UsuarioId : ['', [Validators.required]],
      EjemplarId : ['', [Validators.required]],
      fecha_dev : ['', [Validators.required]],
      fecha_pres : ['', [Validators.required]],
    }
  )
constructor(
  private formBuilder: FormBuilder,
  private prestarService: PrestarService,
  private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue: PrestarI = this.formulario.value

    this.prestarService.createPrestar(formValue).subscribe(
      () => {
        this.router.navigateByUrl('/prestar')
      }
    )
  }
}