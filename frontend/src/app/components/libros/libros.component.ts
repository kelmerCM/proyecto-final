import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { LibrosI } from 'src/app/models/libros';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: LibrosI [] = []
  constructor(
    private libroService:LibrosService
  ) { }

  ngOnInit(): void {
    this.mostrarLibros()
  }


  mostrarLibros() {
    this.libroService.getAllLibros().subscribe(
      {
        next: (data) => {
          this.libros = data.libros
          console.log(this.libros)
        }
      }
    )
  }

}
