import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-viewchild',
  imports: [Mypageheader],
  templateUrl: './viewchild.html',
  styleUrl: './viewchild.css',
})
export class Viewchild {
  @ViewChild('myInputText') InputElement!: ElementRef;
  @ViewChild('myDiv') divElement!: ElementRef;

  signalInputText =  ViewChild('mySignalInputText') as ElementRef;

  readText(){
    if (this.InputElement) {
      alert("Entered Value is " + this.InputElement.nativeElement.value); 
    }
  } 

  changeColor(color:String){
      if (this.divElement) {
        this.divElement.nativeElement.style.backgroundColor = color;
      }
  }

  readTextSignal(){
    debugger;
    if (this.signalInputText) {
      alert("Entered Value is " + this.signalInputText.nativeElement.value);
    }
  }

}
