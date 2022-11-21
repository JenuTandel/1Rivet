import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrMessageService } from './services/toastrMessage.service';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
    // ToastrModule.forRoot()
  ],
  providers:[ToastrMessageService],
})
export class SharedModule { }
