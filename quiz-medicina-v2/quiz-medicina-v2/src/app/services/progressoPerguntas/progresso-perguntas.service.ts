import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Progresso, ProgressoPerguntas } from 'src/app/models/progressoPerguntas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProgressoPerguntasService extends ServiceBase<ProgressoPerguntas> {

  constructor(private http: HttpClient) {
    super(http, 'progresso-perguntas');
  }

  getProgressoByQuizId(usuarioId: number, quizId: number): Observable<Progresso>{
    return this.httpClient.get<Progresso>(`${API_CONFIG.baseUrl}/usuarios/${usuarioId}/quiz/${quizId}/${this.url}`);
  }

  getProgressoByCategoria(usuarioId: number, quizId: number, categoriaId: number): Observable<Progresso>{
    return this.httpClient.get<Progresso>(`${API_CONFIG.baseUrl}/usuarios/${usuarioId}/quiz/${quizId}/categorias/${categoriaId}/${this.url}`);
  }

  postManyProgressoPerguntas(progressoPerguntas: ProgressoPerguntas[]): Observable<ProgressoPerguntas[]>{
    return this.httpClient.post<ProgressoPerguntas[]>(`${API_CONFIG.baseUrl}/${this.url}/many`, progressoPerguntas);
  }
}
