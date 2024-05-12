import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Alternativa } from 'src/app/models/alternativa';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlternativasService extends ServiceBase<Alternativa> {

  constructor(private http: HttpClient) {
    super(http, "alternativas");
  }

  postManyAlternativas(alternativas: Alternativa[]): Observable<Alternativa[]> {
    return this.httpClient.post<Alternativa[]>(`${API_CONFIG.baseUrl}/${this.url}/many`, alternativas);
  }

  getAllAlternativasByPerguntaId(perguntaId: number): Observable<Alternativa[]> {
    return this.httpClient.get<Alternativa[]>(`${API_CONFIG.baseUrl}/perguntas/${perguntaId}/${this.url}`);
  }
}
