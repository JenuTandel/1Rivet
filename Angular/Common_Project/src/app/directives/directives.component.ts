import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(Rx);
  }

}
