import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Email } from 'src/app/models/email';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService extends ServiceBase<Email> {

  constructor(private http: HttpClient) {
    super(http, 'send-email');
  }


}
