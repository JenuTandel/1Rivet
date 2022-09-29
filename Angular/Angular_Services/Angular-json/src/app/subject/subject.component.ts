import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, AfterViewInit {

    // public subject = new Subject();
  // public subject = new BehaviorSubject(0);
  // public subject = new ReplaySubject(2);
  public subject = new AsyncSubject();
  
  // a:number=10;
  // b:number=10;
  public observer1:any;
  public observer2:any;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    this.observer1 = this.subject.subscribe({
      next:(msg)=>{
        console.log("Next: "+msg);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Completed")
      }
    })
    this.subject.next(1)
    this.subject.next(2)
    this.subject.complete()
    this.subject.next(3)
    
    this.observer2 = this.subject.subscribe({
      next:(msg)=>{
        console.log("Second Next: "+msg);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Completed")
      }
    })
    this.subject.next(4);
  }

}
