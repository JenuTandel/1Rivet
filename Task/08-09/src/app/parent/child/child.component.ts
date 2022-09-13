import { Component, OnInit , Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 @ViewChild('username') username!: ElementRef<HTMLInputElement>;

  @Input() childdata: string[];

  @Output() addData: EventEmitter<string>
  
  constructor() { 
    this.childdata = [];
    console.log(this.childdata);
    this.addData = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.childdata);
  }

  onSubmit() {
    //console.log(this.username.nativeElement.value);
    this.addData.emit(this.username.nativeElement.value);
    this.username.nativeElement.value = "";
  }
}
