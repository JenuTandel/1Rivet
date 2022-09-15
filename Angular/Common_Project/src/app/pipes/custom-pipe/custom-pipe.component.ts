import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  Person_Details: any[] = [
    {
      Id:1,
      Name: "Jinal",
      Gender: "F"
    },
    {
      Id:2,
      Name: "Arpan",
      Gender: "M"
    },
    {
      Id:3,
      Name: "Hetal",
      Gender: "F"
    },
    {
      Id:4,
      Name: "Roshan",
      Gender: "M"
    },
    {
      Id:5,
      Name: "Pradip",
      Gender: "M"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  // onClick(){
    
  // }


}
