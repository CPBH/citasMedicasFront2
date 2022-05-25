import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {consulta} from "../models/Consulta";

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private URL: string = `${environment.API_URL}/api/v1/consulta`;

  constructor(
    private httpClient: HttpClient
  ) { }
  public guardar(consulta: consulta): Observable<any> {
    return this.httpClient.post<any>(this.URL, consulta);
  }
}