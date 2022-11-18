import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public status: BehaviorSubject<boolean>;

  constructor() {
    this.status = new BehaviorSubject<boolean>(false);
  }

  public showLoader(value: boolean): void {
    this.status.next(value);
  }

}
