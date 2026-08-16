import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  @Input() textColor:string="black";

  constructor(private elementRefObj:ElementRef){

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRefObj.nativeElement.style.color = this.textColor;
    this.elementRefObj.nativeElement.style.cursor = "pointer";    
  }

  @HostListener('mouseleave') onMouseLeft(){
    this.elementRefObj.nativeElement.style.color = 'black';
    this.elementRefObj.nativeElement.style.cursor = "default";   
  }

}
