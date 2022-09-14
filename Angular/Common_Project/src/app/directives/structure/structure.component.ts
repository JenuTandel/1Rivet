import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  isAvailable: boolean = false;
  mydata:any;
  selectItem: string;
  
  constructor() {
    this.mydata = [];
    this.selectItem='';
  }

  ngOnInit(): void {
    this.mydata = [
      { id: 1, name: 'Success' },
      { id: 2, name: 'Info' },
      { id: 3, name: 'Warning' },
      { id: 4, name: 'Danger' },
      { id: 5, name: 'Other' }
    ];
  }

  onBtnClick() {
    this.isAvailable = !this.isAvailable;
  }
}
