import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './pipes/currency-pipe/currency-pipe';
import { GenderPipe } from './pipes/gender-pipe/gender.pipe';
import { NameLogoPipe } from './pipes/name-logo-pipe/name-logo.pipe';
import { FontStyleDirective } from './directives/directive-style/font-style.directive';
import { InputStyleDirective } from './directives/input-style/input-style.directive';



@NgModule({
  declarations: [
    CurrencyPipe,
    GenderPipe,
    NameLogoPipe,
    FontStyleDirective,
    InputStyleDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyPipe,
    GenderPipe,
    NameLogoPipe,
    FontStyleDirective
  ]
})
export class SharedModule { }
