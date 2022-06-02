import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuariosI } from '../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  base_url = 'http://localhost:3000' 
  constructor(
    private http: HttpClient
  ) { }


  getAllUsuarios(): Observable<{usuarios:UsuariosI[]}> {
    return this.http.get<{usuarios:UsuariosI[]}>(this.base_url + '/usuarios')
  }

  createUsuario(data:any): Observable<UsuariosI>{
    return this.http.post<UsuariosI>(this.base_url + '/createUsuario', data)
  }
}