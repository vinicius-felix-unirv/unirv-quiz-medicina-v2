import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Categoria } from 'src/app/models/categoria';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService extends ServiceBase<Categoria> {

  constructor(private http: HttpClient) {
    super(http, "categorias");
  }

  getAllCategoriasByCusro(cursoId: number): Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(`${API_CONFIG.baseUrl}/cursos/${cursoId}/${this.url}`);
  }

  putStatusCategoria(id: number): Observable<Categoria>{
    return this.httpClient.put<Categoria>(`${API_CONFIG.baseUrl}/${this.url}/${id}/status`, '');
  }
}
