import { Component, OnInit } from '@angular/core';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Usuario } from 'src/app/models/usuario';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  ranking: Usuario[] = [];
  cursoId!: number;

  constructor(
    private usuarioService: UsuarioService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ) {}

  ngOnInit(): void {
    this.loadCursoId();
    this.loadRanking();
  }

  private loadCursoId(): void {
    this.dataUtilsService.getData().subscribe(data => {
      this.cursoId = data?.cursoId!;
    });
  }

  private loadRanking(): void {
    if (this.cursoId !== undefined) {
      this.usuarioService.getRanking(this.cursoId).subscribe(
        users => this.ranking = users
      );
    }
  }

  public getPodiumImageClass(index: number): string {
    switch (index) {
      case 0: return 'podium-img-first';
      case 1: return 'podium-img-second';
      default: return 'podium-img-third';
    }
  }

  public getPodiumItemClass(index: number): string {
    switch (index) {
      case 0: return 'podium-item-first';
      case 1: return 'podium-item-second';
      default: return 'podium-item-third';
    }
  }

  public shouldShowRanking(index: number): boolean {
    return index >= 3;
  }
}