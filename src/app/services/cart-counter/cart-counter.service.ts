import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
  counter: BehaviorSubject<any> = new BehaviorSubject(0);
  constructor() { }

  updateCounter(value:number){ 
    this.counter.next(value);
  }

  getCounter():Observable<any>{
    return this.counter;
  }
}
