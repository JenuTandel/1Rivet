import { AfterViewInit, Component, OnInit } from '@angular/core';
import { concat, debounceTime, filter, forkJoin, from, fromEvent, interval, map, merge, Observable, of, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { CreateEleService } from './create-ele.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, AfterViewInit {

  // public observable$ = new Observable();
  constructor(public displayservice: CreateEleService) {

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

  //RxJS Operators
  ngAfterViewInit(): void {
    //of operator
    of(1, 2, 3)
      .pipe(map((x) => x * x))
      .subscribe((v) => this.displayservice.display(v, 'ulist'))
    //  .subscribe((v) => console.log(`value: ${v}`));

    // const clicks = fromEvent(document, 'click');
    // clicks.subscribe((x) => console.log(x));

    //fromEvent operator
    const btn = document.getElementsByTagName("button");
    fromEvent(btn, 'click').subscribe((x) => {
      console.log(x);
    });

    //interval operator
    let test = interval(1000);
    let case1 = test.pipe(take(10));
    case1.subscribe(x => console.log(x));

    //from opeartor
    from([1, 2, 3, 4, 5]).subscribe((x) => this.displayservice.display(x, 'ulist'));

    //concat opeartor
    console.log("concat");

    concat(
      of(1, 2, 3),
      of(4, 5, 6),
      case1
    ).subscribe(x => console.log(x));

    //merge operator

    // const first = interval(2500);
    // const second = interval(1000);
    // const example = merge(first,second)
    // example.subscribe(x => console.log(x));

    console.log("merge");
    merge(
      of(1, 2, 3),
      of(2, 4, 5, 6),
    ).subscribe(x => console.log(x));

    //forkjoin operator
    console.log("forkjoin");
    forkJoin(
      of(1, 2, 3),
      of(2, 4, 5, 6),
    ).subscribe(x => console.log(x));

    //filter operator
    console.log("filter");
    of(2, 3, 4, 5, 6, 7, 8).pipe(filter((x) => x % 2 == 0)).subscribe((x) => console.log(x));

    //takeUntil operator
    const source = interval(1000);
    const time = timer(5000);
    source.pipe(takeUntil(time)).subscribe(
      (x) => console.log(x)
    );

    //debounceTime operator
    let searchBox = document.getElementsByTagName('input');
    const keyup = fromEvent(searchBox, 'keyup');
    keyup
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500)
      )
      .subscribe(console.log);

    //map operator
    console.log("map");
    let m = from([4, 6, 7, 8, 9]);
    m.pipe(map((val) => val * 3)).subscribe((x) => {
      console.log(x);
    })

    //tap operator ???
    const s = of(1, 2, 3, 4, 5)
      .pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        map(val => val + 10),
        tap(val => console.log(`AFTER MAP: ${val}`))
      )
      .subscribe(val => console.log(val));

    //switchMap
    fromEvent(document, 'click')
      .pipe(
      // switchMap(() => interval(1000))
    )
      .subscribe((x) => console.log(x));
  }
}
