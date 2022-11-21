import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MasterComponent } from './component/master/master.component';
import { RouterModule } from '@angular/router';
import { fakeBackendProvider } from './interceptor/fakebackend.interceptor';
import { LoaderComponent } from './component/loader/loader.component';
import { LoaderService } from './services/loader.service';


@NgModule({
  declarations: [
    MasterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers:[AuthService,AuthGuard, LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    fakeBackendProvider
  ],
  exports:[LoaderComponent]
})
export class CoreModule { }
