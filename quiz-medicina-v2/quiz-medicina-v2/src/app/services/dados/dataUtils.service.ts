import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CategoriaForPerguntas } from 'src/app/models/dataUtils';

@Injectable({
  providedIn: 'root'
})
export class DataUtilsService {

  dataForPerguntas = new BehaviorSubject<CategoriaForPerguntas | null>(null);

  getData(): Observable<CategoriaForPerguntas | null> {
    return this.dataForPerguntas.asObservable();
  }

  sendData(data: CategoriaForPerguntas): void {
    this.dataForPerguntas.next(data);
  }

  constructor() { }

  categoriaId: number = 0;
  quizId: number = 0;
  usuarioId: number = 0;
}
