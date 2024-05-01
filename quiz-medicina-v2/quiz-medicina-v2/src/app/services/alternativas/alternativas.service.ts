import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Alternativa } from 'src/app/models/alternativa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlternativasService extends ServiceBase<Alternativa> {

  constructor(private http: HttpClient) {
    super(http, "alternativas");
  }
}
