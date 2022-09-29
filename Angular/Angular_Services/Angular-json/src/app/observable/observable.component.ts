import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, AfterViewInit {

  // public observable$ = new Observable();
  constructor() {

  }


  ngOnInit(): void {
    const observable$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next("Hello");
      }, 1000),
        setTimeout(() => {
          observer.next("Jinal");
        }, 2000),
        setTimeout(() => {
          observer.next("How r u?");
        }, 3000)
    })
    observable$.subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

  ngAfterViewInit(): void {
    of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));
  }

  btn = document.getElementsByTagName("button");
  clicks = fromEvent(this.btn, 'click').subscribe((x)=>{
    console.log(x);
  });
  
}
