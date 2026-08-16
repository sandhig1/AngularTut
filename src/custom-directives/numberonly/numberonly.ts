import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]',
})
export class Numberonly {
  @HostListener('keypress', ['$event']) onKeyPress(event:KeyboardEvent){
    const allowedNumebers = /[0-9]/;
    
    if (!allowedNumebers.test(event.key)){
      event.preventDefault();
    }
  } 
}
