import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Quiz } from 'src/app/models/quiz';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends ServiceBase<Quiz> {

  constructor(private http: HttpClient) {
    super(http, "quiz");
  }

  getAllQuizByCursoId(cursoId: number, skip: number, take: number): Observable<Quiz[]>{
    return this.httpClient.get<Quiz[]>(`${API_CONFIG.baseUrl}/cursos/${cursoId}/quiz/${skip}/${take}`);
  }
}
