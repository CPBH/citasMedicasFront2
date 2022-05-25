import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {Receta} from "../models/receta";

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private URL: string = `${environment.API_URL}/api/v1/receta`;

  constructor(
    private httpClient: HttpClient
  ) { }
  public guardar(receta: Receta): Observable<any> {
    return this.httpClient.post<any>(this.URL, receta);
  }
}