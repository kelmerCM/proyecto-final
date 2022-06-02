import { Component, OnInit } from '@angular/core';
import { EjemplaresService } from 'src/app/services/ejemplares.service';
import { EjemplaresI } from 'src/app/models/ejemplares';


@Component({
  selector: 'app-ejemplares',
  templateUrl: './ejemplares.component.html',
  styleUrls: ['./ejemplares.component.css']
})
export class EjemplaresComponent implements OnInit {

  public ejemplares: EjemplaresI [] = []

  constructor(
    private ejemplaresService: EjemplaresService
  ) { }

  ngOnInit(): void {
    this.mostrarEjempalres()
  }

  mostrarEjempalres() {
    this.ejemplaresService.getAllEjemplares().subscribe(
      {
        next: (data) => {
          this.ejemplares = data.ejemplar
          console.log(this.ejemplares)
        }
      }
    )
  }
}
