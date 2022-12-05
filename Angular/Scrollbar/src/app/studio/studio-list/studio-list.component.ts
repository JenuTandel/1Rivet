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
  public distance: number = 2;

  constructor(private studioService: StudioService) {
    this.tableProperty = new Pagination();
    this.tableProperty.pageNumber = 1;
    this.tableProperty.pageSize = 10;
  }

  ngOnInit(): void {
    this.getAllStudios(this.tableProperty);
  }

  /**
   * @author Jinal Tandel
   * @description "method for get all studios"
   * @param tableProperty 
   */
  getAllStudios(tableProperty: Pagination) {
    this.tableProperty = tableProperty;
    this.studioList$ = this.studioService.getAllStudios(tableProperty);
  }

  /**
   * @author Jinal Tandel
   * @description "method for scrolling studio page"
   */
  onScroll() {
    this.tableProperty.pageNumber++;
    this.getAllStudios(this.tableProperty);
  }
}
