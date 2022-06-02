import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestarI } from '../models/prestar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestarService {

  base_url = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getAllPrestar(): Observable<{ prestar: PrestarI[] }>{
    return this.http.get<{ prestar: PrestarI[] }>(this.base_url + '/prestar')
  }



  getAllPrestarCond1(fechaI:string="2020-01-01", fechaF: string="2020-01-31"): Observable<{ prestar: PrestarI[] }>{
    return this.http.get<{ prestar: PrestarI[] }>(this.base_url + `/prestar/condicion1/${fechaI}/${fechaF}`)
  }

  getAllPrestarCond2(fechaI:string="2020-01-01", fechaF: string="2020-01-31"): Observable<{ prestar: PrestarI[] }>{
    return this.http.get<{ prestar: PrestarI[] }>(this.base_url + `/prestar/condicion2/${fechaI}/${fechaF}`)
  }

  getAllPrestarCond3(fechaI:string="2020-01-01", fechaF: string="2020-01-31"): Observable<{ prestar: PrestarI[] }>{
    return this.http.get<{ prestar: PrestarI[] }>(this.base_url + `/prestar/condicion3/${fechaI}/${fechaF}`)
  }

  createPrestar(data:any): Observable<PrestarI> {
    return this.http.post<PrestarI>(this.base_url + '/createPrestar',data)
  }
}