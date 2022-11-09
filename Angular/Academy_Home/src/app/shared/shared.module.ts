import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PhonemaskDirective } from './custome_directive/phonemask.directive';



@NgModule({
  declarations: [
    PhonemaskDirective
  ],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  providers:[DialogService],
  exports:[PhonemaskDirective]
})
export class SharedModule { }
