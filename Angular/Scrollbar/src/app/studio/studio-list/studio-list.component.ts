import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudioService } from '../services/studio.service';
import { Pagination, studio } from '../studio.model';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {
  public studioList$!: Observable<studio[]>;

  public tableProperty: Pagination;

  distance = 2;
  throttle = 0;
  public studioList:studio[];
  constructor(private studioService:StudioService) { 
    this.studioList = [];
    this.tableProperty = new Pagination();
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 10;
  }


  ngOnInit(): void {
  }
  
  getAllStudios(tableProperty: Pagination){
    this.tableProperty = tableProperty;
    // this.studioService.getAllStudios().subscribe((res:studio[])=>{
    //   this.studioList = res
    // });
    this.studioList$ = this.studioService.getAllStudios(tableProperty);
  }

  onScroll() {
    this.tableProperty.pageNumber++;
    this.getAllStudios(this.tableProperty);
  }
}
