import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers:[DialogService]
})
export class SharedModule { }
