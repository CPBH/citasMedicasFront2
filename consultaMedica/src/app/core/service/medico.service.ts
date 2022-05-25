import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL: string = `${environment.API_URL}/api/v1/usuarios`; //MYSQL
  private URL_NEO: string = `${environment.API_URL}/usuarios`; //NEO4j

  constructor(
    private httpClient: HttpClient
  ) { }

  public guardar(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.URL, usuario);
  }

  public guardarNeo(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.URL_NEO, usuario);
  }

  public login(numeroDocumento: string, contrasena: string): Observable<any> {
    return this.httpClient.get<Usuario>(this.URL+ `?numeroDocumento=${numeroDocumento}?contrasena=${contrasena}`);
  }

  public listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL);
  }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/${id}`);
  }

  public actualizar(id: number, usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(this.URL + `/${id}`, usuario);
  }

  public getCliente(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.URL + `/${id}`);
  }
}
