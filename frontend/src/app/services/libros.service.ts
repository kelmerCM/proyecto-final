import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LibrosI } from 'src/app/models/libros';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  base_url = 'http://localhost:3000'
  constructor(
    private http: HttpClient
  ) { }


  getAllLibros(): Observable<{ libros: LibrosI[] }>{
    return this.http.get<{libros:LibrosI[]}>(this.base_url + '/libros')
  }


  createLibro(data:any): Observable<LibrosI> {
    return this.http.post<LibrosI>(this.base_url + '/createLibro', data)
  }
}