import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Historia } from '../models/historia';

@Injectable({
    providedIn: 'root'
})
export class HistoriaService {
    private URL: string = `${environment.API_URL}/api/v1/historia`;
    constructor(
        private httpClient: HttpClient
    ) { }
    
    public guardar(historia: Historia): Observable<any> {
        return this.httpClient.post<any>(this.URL, historia);
    }
    public actualizar(id: number, historia: Historia): Observable<Historia> {
        return this.httpClient.put<Historia>(this.URL + `/${id}`, historia);
    }
}