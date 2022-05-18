import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {Cita} from "../models/cita";

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private URL: string = `${environment.API_URL}/api/v1/cita`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public guardar(cita: Cita): Observable<any> {
    return this.httpClient.post<any>(this.URL, cita);
  }

  public listar(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(this.URL);
  }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/${id}`);
  }

  public actualizar(id: number, cita: Cita): Observable<Cita> {
    return this.httpClient.put<Cita>(this.URL + `/${id}`, cita);
  }

  public getCliente(id: number): Observable<Cita> {
    return this.httpClient.get<Cita>(this.URL + `/${id}`);
  }
}
