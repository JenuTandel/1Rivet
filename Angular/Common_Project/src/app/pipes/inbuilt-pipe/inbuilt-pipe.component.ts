import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe',
  templateUrl: './inbuilt-pipe.component.html',
  styleUrls: ['./inbuilt-pipe.component.scss']
})
export class InbuiltPipeComponent implements OnInit {

  todayDate : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
