import {
  Directive,
  ElementRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {

 @Input() backgroundColor: string;

  constructor(private element: ElementRef) {
    console.log('class directive is being used');
    this.element.nativeElement.style.color = 'deeppink';
    this.element.nativeElement.style.backgroundColor = 'deeppink';
  }


}


/*
Communicate from parent to child support

Parent component template
<app-card 
         [title]" 'SnowyMountain' "></app-card>
*/

// Child component class
/*
import { Input } from 'angular';

calss ChildComponent {
  @Input() title: string; 
}
*/