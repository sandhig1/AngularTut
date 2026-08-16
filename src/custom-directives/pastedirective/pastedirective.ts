import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPastedirective]',
})
export class Pastedirective {
  constructor(private elementRefObj : ElementRef){

  }

  @HostListener("mouseenter") onMouseHover(){
    this.elementRefObj.nativeElement.style.cursor = "pointer";
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.elementRefObj.nativeElement.style.cursor = "default";
  }

  @HostListener('click') async onClick(){
    
    if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
       

        this.elementRefObj.nativeElement.innerText = text;
    }
  }
}
