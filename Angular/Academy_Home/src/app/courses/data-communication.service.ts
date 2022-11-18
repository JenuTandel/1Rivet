import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  public CommunicationData$: Observable<any>;
  public CommunicationData: Subject<any>;

  constructor() {
    this.CommunicationData = new Subject();
    this.CommunicationData$ = this.CommunicationData.asObservable();
  }

  getData(course:Course){
    
  }
}
