import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appItem]'
})
export class ItemDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundcolor = '#ddd';
    
  }

}
