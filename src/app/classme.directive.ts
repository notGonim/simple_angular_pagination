import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClassme]',
})
export class ClassmeDirective {
  @Input('color') bgColor;
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.color = 'red';
  }
}
