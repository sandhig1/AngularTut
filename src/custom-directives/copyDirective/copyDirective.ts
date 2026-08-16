import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appCopy]',
})
export class CopyDirective {
  constructor(private elementRefObj : ElementRef){

  }

  @HostListener("mouseenter") onMouseHover(){
    this.elementRefObj.nativeElement.style.cursor = "pointer";
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.elementRefObj.nativeElement.style.cursor = "default";
  }

  @HostListener('click') onClick(){
    debugger;
    const selectedText = this.elementRefObj.nativeElement.innerText;
    navigator.clipboard.writeText(selectedText).then(()=>{
      alert("Copied!!!")
    })
  }  
}
