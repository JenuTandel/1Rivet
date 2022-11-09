import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhonemask]'
})
export class PhonemaskDirective {

  constructor(private ngControl:NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event:any) {
    console.log('ngModel' + event);
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event:any) {
    console.log('backspace' + event.target.value);
    this.onInputChange(event.target.value, true);
  }

  /**
   * Method for input change on textfield
   * @param event 
   * @param backspace 
   */
  onInputChange(event:any, backspace:boolean) {
    // console.log(event, backspace);
    let newVal = event.replace(/\D/g,'')
    // console.log('first' + newVal);
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
      // console.log('back' + newVal);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '($1)');
      // console.log('<3' + newVal);
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) ($2)');
      // console.log('<6' + newVal);
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) ($2) ($3)');
      // console.log('<10' + newVal);
    } else {
      newVal = newVal.substring(0, 10);
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) ($2) ($3)');
      // console.log('final' + newVal);
    }
    this.ngControl.valueAccessor?.writeValue(newVal);
  }

}
