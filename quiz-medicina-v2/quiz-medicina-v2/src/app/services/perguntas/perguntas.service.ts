import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Pergunta } from 'src/app/models/pergunta';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';


@Injectable({
  providedIn: 'root'
})
export class PerguntaService extends ServiceBase<Pergunta> {

  constructor(private http: HttpClient) {
    super(http, "perguntas");
  }

  getAllPerguntasQuizByCategoria(usuariosid: number, quizId: number, categoriaId: number, skip: number, take: number): Observable<Pergunta[]>{
    return this.httpClient.get<Pergunta[]>(`${API_CONFIG.baseUrl}/usuarios/${usuariosid}/quiz/${quizId}/categorias/${categoriaId}/perguntas/${skip}/${take}`);
  }

  putStatusPergunta(id: number): Observable<Pergunta>{
    return this.httpClient.put<Pergunta>(`${API_CONFIG.baseUrl}/${this.url}/${id}/status`, '');
  }

}
