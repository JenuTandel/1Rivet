import { Component, Input, OnInit } from '@angular/core';
import { studio } from 'src/app/studio/studio.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /**
   * @author Jinal Tandel
   * @description "Setter Getter method for studioList"
   */
  @Input() public set studioResponse(studioResponse: studio[] | null) {
    if (studioResponse) {
      this._studioResponse = this._studioResponse.concat(studioResponse)
    }
  }
  public get studioResponse(): studio[] {
    return this._studioResponse;
  }
  private _studioResponse: studio[];

  constructor() {
    this._studioResponse = []
    console.log(this.studioResponse);
  }
  ngOnInit(): void {
    
  }
}
