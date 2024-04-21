import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Pergunta } from 'src/app/models/pergunta';


@Injectable({
  providedIn: 'root'
})
export class PerguntaService extends ServiceBase<Pergunta> {

  constructor(private http: HttpClient) {
    super(http, "perguntas");
  }
}
