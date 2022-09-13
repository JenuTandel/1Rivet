import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public parentData: string[];

  constructor() { 
    this.parentData = [];
  }

  ngOnInit(): void {
    this.parentData = ["Jinal"];
  }

  onAddToDo(data: string) {
    console.log(data);
    this.parentData.push(data);
  }
}
