import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudioComponent } from './studio/studio.component';
import { StudioModule } from './studio/studio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
