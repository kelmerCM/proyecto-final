import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EjemplaresI } from '../models/ejemplares';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EjemplaresService {

  base_url = 'http://localhost:3000'
  constructor(
    private http: HttpClient
  ) { }

  getAllEjemplares(): Observable<{ ejemplar: EjemplaresI[] }>{
    return this.http.get<{ ejemplar: EjemplaresI[] }>(this.base_url + '/ejemplares')
  }

  createEjemplar(data:any): Observable<EjemplaresI> {
    return this.http.post<EjemplaresI>(this.base_url + '/createEjemplar', data)
  }
}