import { Component, OnInit } from '@angular/core';
import { PrestarI } from 'src/app/models/prestar';
import { PrestarService } from 'src/app/services/prestar.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  public con1: PrestarI[] = []
  public con2: PrestarI[] = []
  public con3: PrestarI[] = []

   constructor(
    private con1Service: PrestarService,
    private con2Service: PrestarService,
    private con3Service: PrestarService
  ) { }

  ngOnInit(): void {
    this.mostrarPrestar()
  }

  mostrarPrestar() {
    this.con1Service.getAllPrestarCond1().subscribe(
      {
        next: (data) => {
          this.con1 = data.prestar
          console.log(this.con1)
        }
      }
    )

    this.con2Service.getAllPrestarCond2().subscribe(
      {
        next: (data) => {
          this.con2 = data.prestar
          console.log(this.con2)
        }
      }
    )

    this.con3Service.getAllPrestarCond3().subscribe(
      {
        next: (data) => {
          this.con3 = data.prestar
          console.log(this.con3)
        }
      }
    )


  }
}
