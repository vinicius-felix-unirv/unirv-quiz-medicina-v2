import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';

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

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  value = 'Insirir pergunta'

  menu: MenuItem[] = [
    { menuIcon: "fa-solid fa-house", menuName: "Home", menuUrl: "home", roleUser: [1] },
    { menuIcon: "fa-solid fa-play", menuName: "Play", menuUrl: "home/quiz-screen", roleUser: [1] },
    { menuIcon: "fa-solid fa-user", menuName: "Ranking", menuUrl: "home/ranking", roleUser: [1] },
    { menuIcon: "fa-solid fa-bars", menuName: "Quiz", menuUrl: "home/tela-criacao-quiz", roleUser: [1] },
  ];

  public redirect(item: MenuItem): void {

    this.router.navigate([item.menuUrl]);

  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
