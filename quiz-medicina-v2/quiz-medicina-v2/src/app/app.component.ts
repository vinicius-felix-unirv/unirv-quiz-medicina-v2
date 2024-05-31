import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz-medicina-v2';
  showMenu: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = this.shouldShowMenu(event.urlAfterRedirects);
      }
    });
  }

  shouldShowMenu(url: string): boolean {

    const routesWithMenu = ['/home' ];
    return routesWithMenu.some(route => url.startsWith(route));
  }

}
