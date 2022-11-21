import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public loaderValue:boolean;
  constructor(private loaderService: LoaderService) { 
    this.loaderValue = false;
  }

  ngOnInit(): void {
      this.loaderService.status.subscribe((value)=>{
      this.loaderValue = value;
    })
  }

}
