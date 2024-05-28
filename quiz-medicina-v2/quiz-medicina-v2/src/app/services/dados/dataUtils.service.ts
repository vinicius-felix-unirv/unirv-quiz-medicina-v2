import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataUtilsService<T> {

  data = new BehaviorSubject<T | null>(null);

  getData(): Observable<T | null> {
    return this.data.asObservable();
  }

  sendData(data: T): void {
    this.data.next(data);
  }

  constructor() { }

}
