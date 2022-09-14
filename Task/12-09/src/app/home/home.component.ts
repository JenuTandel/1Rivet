import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @Input() size:number = 0;
  fsize:number;
  btntype:string = 'increase';

  constructor() { 
    this.fsize = 30;
  }

  ngOnInit(): void {
  }

  public btnclick(btntype:string):void{

    (this.btntype == btntype) ? (this.fsize = this.fsize + 2) : (this.fsize = this.fsize - 2);

    // if(btntype=='increase')
    // {
    //   this.fsize = this.fsize + 2;
    // }
    // else{
    //   this.fsize = this.fsize - 2;
    // }

  }
}
