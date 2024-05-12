import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { QuizAvaliativo } from 'src/app/models/quizAvaliativo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class QuizAvaliativoService extends ServiceBase<QuizAvaliativo>{

  constructor(private http: HttpClient) {
    super(http, 'quiz-avaliativos');
  }

  getAllQuizAvaliativoByCursoId(cursoId: number, skip: number, take: number): Observable<QuizAvaliativo[]>{
    return this.httpClient.get<QuizAvaliativo[]>(`${API_CONFIG.baseUrl}/cursos/${cursoId}/${this.url}/${skip}/${take}`);
  }

  getAllQuizAvaliativoByUsuarioIdAndCursoId(usuariosId: number, cursoId: number, skip: number, take: number): Observable<QuizAvaliativo[]>{
    return this.httpClient.get<QuizAvaliativo[]>(`${API_CONFIG.baseUrl}/usuarios/${usuariosId}/cursos/${cursoId}/${this.url}/${skip}/${take}`);
  }

  putQuizAvaliativoStatus(quizAvaliativoId: number): Observable<QuizAvaliativo>{
    return this.httpClient.get<QuizAvaliativo>(`${API_CONFIG.baseUrl}/${this.url}/${quizAvaliativoId}/status`);
  }
}
