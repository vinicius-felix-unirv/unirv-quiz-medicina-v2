import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router){}

  value = 'Insirir pergunta'

  menu: MenuItem[] = [
    { menuIcon: "fa-solid fa-bars", menuName: "Perguntas", menuUrl: "tela-perguntas", roleUser: [1] },
    { menuIcon: "fa-solid fa-house", menuName: "Home", menuUrl: "home", roleUser: [1] },
    { menuIcon: "fa-solid fa-user", menuName: "Cadastro", menuUrl: "inscricao", roleUser: [1] },
  ];

  public redirect(item: MenuItem): void {

    this.router.navigate([item.menuUrl]);

  }


  focusBTG(){

  }
}
