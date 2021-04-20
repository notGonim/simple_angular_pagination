import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClassme]',
})
export class ClassmeDirective {
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.color = 'red';
  }
}
