import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrMessageService } from './services/toastrMessage.service';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
    // ToastrModule.forRoot()
  ],
  providers:[LoaderService,ToastrMessageService],
  exports:[
    
  ]
})
export class SharedModule { }
