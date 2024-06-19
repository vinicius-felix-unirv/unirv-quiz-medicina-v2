import { Component } from '@angular/core';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Usuario } from 'src/app/models/usuario';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {

  ranking: Usuario[] = [];
  cursoId!: number ;

  constructor(
    private usuarioService: UsuarioService,
    protected dataUtilsService: DataUtilsService<DataUtilsIds>
  ){}

  ngOnInit(): void {

    this.dataUtilsService.getData().subscribe(data =>
      this.cursoId = data?.cursoId!
    );
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
