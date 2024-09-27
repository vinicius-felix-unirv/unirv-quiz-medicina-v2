import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { ServiceBase } from '../servicebase/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends ServiceBase<Curso> {

  constructor(private http: HttpClient) {
    super(http, "cursos");
  }
}
