import { Injectable } from '@angular/core';
import { ServiceBase } from '../servicebase/base.service';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends ServiceBase<Usuario> {

  constructor(private http: HttpClient) {
    super(http, "usuarios");
  }
}
