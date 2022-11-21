import { Component, Input, OnInit } from '@angular/core';
import { studio } from 'src/app/studio/studio.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public set studioResponse(studioResponse: studio[] | null) {
    if (studioResponse) {
      // this._baseResponse.map((item)=>{
      //   console.log(item.hits);
      // })
      this._studioResponse = this._studioResponse.concat(studioResponse);
      // this._studioResponse.push(...studioResponse);
    }
  }
  public get studioResponse(): studio[] {
    return this._studioResponse;
  }

  private _studioResponse!: studio[];

  @Input() data: any;
  message: string;
  sta: boolean;

  public id: number;
  constructor() {
    this.data = [];
    this.id = 1;
    this.message = "temperory closed";
    this.sta = false;
  }

  ngOnInit(): void {
   
  }
}
