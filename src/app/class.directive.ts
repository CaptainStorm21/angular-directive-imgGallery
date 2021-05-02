import {
  Directive,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {
    console.log('class directive is being used');
    this.element.nativeElement.style.backgroundColor = 'deeppink';
  }
}

