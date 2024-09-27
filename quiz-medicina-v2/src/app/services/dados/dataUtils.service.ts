import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class DataUtilsService<T> {

  data = new BehaviorSubject<T | null>(null);


  constructor(
    private storageService: StorageService
  ) {
    const sessionData = this.storageService.getSessionData<T>('atual');
    this.data = new BehaviorSubject<T | null>(sessionData);
  }

  getData(): Observable<T | null> {
    return this.data.asObservable();
  }

  sendData(data: T): void {
    this.data.next(data);
    this.storageService.setSessionData<T>('atual', data);
  }
}
