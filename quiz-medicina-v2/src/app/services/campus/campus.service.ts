import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campus } from 'src/app/models/campus';
import { ServiceBase } from '../servicebase/base.service';

@Injectable({
  providedIn: 'root'
})
export class CampusService extends ServiceBase<Campus> {

  constructor(private http: HttpClient) {
    super(http, "campus");
  }
}
