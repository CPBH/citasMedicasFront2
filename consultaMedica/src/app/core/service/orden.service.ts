import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";
import {Orden} from "../models/orden";

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private URL: string = `${environment.API_URL}/api/v1/orden`;

  constructor(
    private httpClient: HttpClient
  ) { }
  public guardar(orden: Orden): Observable<any> {
    return this.httpClient.post<any>(this.URL, orden);
  }
}