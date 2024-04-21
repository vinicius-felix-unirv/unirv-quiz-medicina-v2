import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Categoria } from 'src/app/models/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService extends ServiceBase<Categoria> {

  constructor(private http: HttpClient) {
    super(http, "usuarios");
  }
}
