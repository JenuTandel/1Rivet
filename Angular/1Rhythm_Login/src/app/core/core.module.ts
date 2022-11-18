import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MasterComponent } from './component/master/master.component';
import { RouterModule } from '@angular/router';
import { fakeBackendProvider } from './interceptor/fakebackend.interceptor';


@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers:[AuthService,AuthGuard, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    fakeBackendProvider
  ]
})
export class CoreModule { }
