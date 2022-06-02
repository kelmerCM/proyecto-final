import { Component, OnInit } from '@angular/core';
import { PrestarI } from 'src/app/models/prestar';
import { PrestarService } from 'src/app/services/prestar.service';

@Component({
  selector: 'app-prestar',
  templateUrl: './prestar.component.html',
  styleUrls: ['./prestar.component.css']
})
export class PrestarComponent implements OnInit {
  public prestar: PrestarI[] = []
  
  constructor(
    private prestarService: PrestarService
  ) { }

  ngOnInit(): void {
    this.mostrarPrestar()
  }

  mostrarPrestar() {
    this.prestarService.getAllPrestar().subscribe(
      {
        next: (data) => {
          this.prestar = data.prestar
          console.log(this.prestar)
        }
      }
    )
  }

}