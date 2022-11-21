import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { StudioService } from './services/studio.service';


@NgModule({
  declarations: [
    StudioComponent,
    StudioListComponent,
  ],
  imports: [
    CommonModule,
    StudioRoutingModule,
    HttpClientModule,
    SharedModule,
    InfiniteScrollModule
  ],
  providers:[StudioService]
})
export class StudioModule { }
