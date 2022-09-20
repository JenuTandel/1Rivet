import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './pipes/currency-pipe/currency-pipe';
import { GenderPipe } from './pipes/gender-pipe/gender.pipe';
import { NameLogoPipe } from './pipes/name-logo-pipe/name-logo.pipe';



@NgModule({
  declarations: [
    CurrencyPipe,
    GenderPipe,
    NameLogoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyPipe,
    GenderPipe
  ]
})
export class SharedModule { }
