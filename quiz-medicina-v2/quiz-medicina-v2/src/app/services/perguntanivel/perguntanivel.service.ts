import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerguntasNivel } from 'src/app/models/perguntanivel';
import { ServiceBase } from '../servicebase/base.service';

@Injectable({
  providedIn: 'root'
})
export class PerguntanivelService extends ServiceBase<PerguntasNivel>{

  constructor(private http: HttpClient) {
    super(http, "perguntas");
  }
}
