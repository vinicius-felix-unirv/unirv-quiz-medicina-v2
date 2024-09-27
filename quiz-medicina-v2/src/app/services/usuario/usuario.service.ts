import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends ServiceBase<Usuario> {

  constructor(private http: HttpClient) {
    super(http, "usuarios");
  }

  getAllUsuariosByCursoId(cursoId: number, skip: number, take: number): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${API_CONFIG.baseUrl}/cursos/${cursoId}/${this.url}/${skip}/${take}`);
  }

  getRanking(cursoId: number): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${API_CONFIG.baseUrl}/cursos/${cursoId}/${this.url}/ranking`);
  }

  addPontuacao(pontuacao: number, usuarioId: number): Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${API_CONFIG.baseUrl}/${this.url}/${usuarioId}/pontuacao`, {pontuacao: pontuacao});
  }

  putSenha(usuarioId: number, senha: string): Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${API_CONFIG.baseUrl}/${this.url}/${usuarioId}/trocar-senha`, senha);
  }

}
