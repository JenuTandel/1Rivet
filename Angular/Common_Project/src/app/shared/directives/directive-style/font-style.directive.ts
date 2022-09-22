import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontStyle]'
})
export class FontStyleDirective {

  constructor(private elref: ElementRef) { 
    elref.nativeElement.style.color = 'green';
    elref.nativeElement.style.fontSize = '30px';
  }

  @HostListener('mouseover') onMouseOver() {
    this.elref.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    setTimeout(() => {
      this.elref.nativeElement.style.color = 'black';
    }, 3000);
  }
}
