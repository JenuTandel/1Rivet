import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // public status: BehaviorSubject<boolean>;
  public status: Subject<boolean>;
  // public status$:Observable<boolean>;

  constructor() {
    // this.status = new BehaviorSubject<boolean>(false);
    this.status = new Subject<boolean>;
    // this.status$ = this.status.asObservable();
  }

  // public showLoader(value: boolean){
  //   this.status.next(value);
  // }
}
