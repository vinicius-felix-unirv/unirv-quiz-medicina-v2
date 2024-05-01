import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Quiz } from 'src/app/models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends ServiceBase<Quiz> {

  constructor(private http: HttpClient) {
    super(http, "usuarios");
  }
}
