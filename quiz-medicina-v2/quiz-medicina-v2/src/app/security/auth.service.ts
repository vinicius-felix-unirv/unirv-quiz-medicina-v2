import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject, map } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { Credenciais } from 'src/app/models/credenciais';
import { LoginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtService: JwtHelperService = new JwtHelperService();
  public spinnerActive = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  public authenticate(creds: Credenciais) {
    this.spinnerActive.next(true);
    return this.http.post<LoginResponse>(`${API_CONFIG.baseUrl}/authentication`, creds)
      .pipe(
        map(resp => {
          this.successfulLogin(resp);
          return resp;
        })
      )
  }

  private successfulLogin(loginResponse: LoginResponse) {
    sessionStorage.setItem('login_info', JSON.stringify(loginResponse));
  }

  public checkTokenExists(): boolean {
    return this.returnLoginInfo?.token == null ? false : true;
  }

  public get returnLoginInfo(): LoginResponse {

    let loginInfo = JSON.parse(sessionStorage.getItem('login_info') || '{}');

    return loginInfo;
  }

  public get returnToken(): string | undefined {
    return this.returnLoginInfo?.token;
  }

  public returnUserId(): string | undefined {
    return this.returnLoginInfo?.id;
  }

  public returnUserRole(): string | undefined {
    return this.returnLoginInfo?.role;
  }

  public isAuthenticated() {
    console.log(1, this.returnLoginInfo?.token);
    let token = this.returnLoginInfo?.token;
    if (token != null) {
      return !this.jwtService.isTokenExpired(token)
    }
    return false;
  }

  public logout() {
    sessionStorage.clear();
  }

}
