import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InbuiltPipeComponent } from './inbuilt-pipe/inbuilt-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InbuiltPipeComponent,
    CustomPipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    InbuiltPipeComponent,
    CustomPipeComponent
  ]
})
export class PipesModule { }
