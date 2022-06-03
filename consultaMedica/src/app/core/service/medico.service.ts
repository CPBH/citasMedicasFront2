import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private URL: string = `${environment.API_URL}/api/v1/usuarios`; //MYSQL
  private URL_NEO: string = `${environment.API_URL}/usuarios`; //NEO4j

  constructor(
    private httpClient: HttpClient
  ) { }

  public guardar(usuariomedico: Medico): Observable<any> {
    return this.httpClient.post<any>(this.URL, medico);
  }

  public guardarNeo(usuariomedico: Medico): Observable<any> {
    return this.httpClient.post<any>(this.URL_NEO, medico);
  }

  public login(numDocumento: string, contrasena: string): Observable<any> {
    return this.httpClient.get<medico>(this.URL+ `?numDocumento=${numDocumento}?contrasena=${contrasena}`);
  }

  public listar(): Observable<medico[]> {
    return this.httpClient.get<medico[]>(this.URL);
  }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/${id}`);
  }

  public actualizar(id: number, usuariomedico: medico): Observable<medico> {
    return this.httpClient.put<medico>(this.URL + `/${id}`, medico);
  }

  public getCliente(id: number): Observable<medico> {
    return this.httpClient.get<medico>(this.URL + `/${id}`);
  }
}
