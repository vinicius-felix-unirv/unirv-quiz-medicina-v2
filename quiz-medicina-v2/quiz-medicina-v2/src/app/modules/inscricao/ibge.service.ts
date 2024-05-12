import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  constructor(private http: HttpClient) { }

  getEstados(): Observable<any[]> {
    return this.http.get<any[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }

  getCidadesPorEstado(estadoId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
  }
}
