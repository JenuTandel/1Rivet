import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public loaderValue!: boolean;
  constructor(private loaderService: LoaderService) {
    // this.loaderValue = false;
    this.loaderService.status.subscribe((value) => {
      console.log(value);
      this.loaderValue = value;
    })
  }

  ngOnInit(): void {

  }

  // ngOnChanges():void{
  //   this.loaderService.status$.subscribe((value)=>{
  //     this.loaderValue = value;
  //   })
  // }


  // ngDoCheck(): void {
  //   this.loaderService.status.subscribe((res) => {
  //     this.loaderValue = res;
  //   })
  // }
}
