import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './authentication/registration.service';
import { UserDataAdapter } from './authentication/userdata.adapter';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  providers:[RegistrationService, UserDataAdapter]
})
export class CoreModule { }
