import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(private httpClient: HttpClient) { }

  ApiEstadosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

  getCidades(uf: string): Observable<any[]> {
    let UF = uf.toUpperCase();
    return this.httpClient.get<any[]>(`${this.ApiEstadosUrl}${UF}/municipios?orderBy=nome`);
  }
}
