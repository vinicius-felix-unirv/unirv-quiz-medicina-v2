import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {

  ranking: Usuario[] = [];
  cursoId: number = 1;

  constructor(
    private usuarioService: UsuarioService
  ){}

  ngOnInit(): void {
    this.usuarioService.getRanking(this.cursoId).subscribe(
      users => this.ranking = users
    );

  }

  public returnClassByPosition(i: number): string {
    switch (i) {
      case 0:
        return "podium-img-second";
      case 1:
        return "podium-img-first";
      default:
        return "podium-img-third";
    }
  }

  public returnClassByPodium(i: number): string {
    switch (i) {
      case 0:
        return "podium-item-second";
      case 1:
        return "podium-item-first";
      default:
        return "podium-item-third";
    }
  }

  showRanking(index: number): boolean {
    return index >= 3;
  }
}
