import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/loginResponse';
import { AuthService } from 'src/app/security/auth.service';
import { StorageService } from 'src/app/services/dados/storage.service';

export interface MenuItem {
  menuIcon: string,
  menuName: string,
  menuUrl: string,
  roleUser: number[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
[x: string]: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private sessionStorage: StorageService
  ){}

  ngOnInit() {
    this.role = parseInt(this.sessionStorage.getSessionData<LoginResponse>('login_info')?.role!);

    this.menu = this.createMenu();
  }

  role: number = 0;
  value = 'Insirir pergunta'

  menu: MenuItem[] = [
    { menuIcon: "fa-solid fa-house", menuName: "Home", menuUrl: "home", roleUser: [1, 2, 3] },
    { menuIcon: "fa-solid fa-play", menuName: "Play", menuUrl: "home/quiz-screen", roleUser: [1, 2, 3] },
    { menuIcon: "fa-solid fa-user", menuName: "Ranking", menuUrl: "home/ranking", roleUser: [1, 2, 3] },
    { menuIcon: "fa-solid fa-bars", menuName: "Quiz", menuUrl: "home/tela-criacao-quiz", roleUser: [1, 2] },
  ];

  public redirect(item: MenuItem): void {

    this.router.navigate([item.menuUrl]);

  }

  public createMenu(): MenuItem[]{
    return this.menu.filter(item => item.roleUser.includes(this.role)).map(item => item);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
