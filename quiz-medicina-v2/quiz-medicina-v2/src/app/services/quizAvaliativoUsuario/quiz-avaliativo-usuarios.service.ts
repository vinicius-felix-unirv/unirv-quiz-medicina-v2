import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { QuizAValiativoUsuarios } from 'src/app/models/quizAvaliativoUsuarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class QuizAvaliativoUsuariosService extends ServiceBase<QuizAValiativoUsuarios> {

  constructor(private http: HttpClient){
    super(http, 'quiz-avaliativos-usuarios');
  }

  getAllQuizAvaliativosUsuarios(usuarioId: number, skip: number, take: number): Observable<QuizAValiativoUsuarios[]>{
    return this.httpClient.get<QuizAValiativoUsuarios[]>(`${API_CONFIG.baseUrl}/${this.url}/${usuarioId}/${skip}/${take}`);
  }
}
