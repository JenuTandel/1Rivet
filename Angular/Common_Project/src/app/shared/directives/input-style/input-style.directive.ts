import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputStyle]'
})
export class InputStyleDirective {

  constructor(public elref:ElementRef) { 
    console.log(this.elref.nativeElement)
  }
  // @HostListener ('keyup') onKeyUp(){
  //   debugger
  //   this.elref.nativeElement.style.color = 'red';
  // }

  @HostListener('window:keydown.enter')
  handleKeyDown() {
    console.log(this.elref.nativeElement)
    this.elref.nativeElement.value.style.color = 'red';
  }
}


