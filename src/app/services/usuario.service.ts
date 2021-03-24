import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/users';
  token = '458d656cf4bded476d923a6958fadd80b795663386d564fbfb0ec49b0d3afb43';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.url + '?acces-token=' + this.token);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(
      this.url + '/' + id + '?acces-token=' + this.token
    );
  }
}
