import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ServiceBase<T> {

  constructor(protected httpClient: HttpClient, @Inject('url') protected url: string) { }


  findById(id: any): Observable<T> {
    return this.httpClient.get<T>(`${API_CONFIG.baseUrl}/${this.url}/${id}`);
  }

  findAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${API_CONFIG.baseUrl}/${this.url}`);
  }

  create(object: T): Observable<T> {
    return this.httpClient.post<T>(`${API_CONFIG.baseUrl}/${this.url}`, object);
  }

  update(object: T, index: number): Observable<T> {
    return this.httpClient.put<T>(`${API_CONFIG.baseUrl}/${this.url}/${index}`, object);
  }
}
