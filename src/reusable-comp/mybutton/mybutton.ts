import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  imports: [],
  templateUrl: './mybutton.html',
  styleUrl: './mybutton.css',
})
export class Mybutton {
  @Input() btnText:string="";
  @Input() btnClass: string="";

  @Output() onBtnClick = new EventEmitter<void>();
  btnClicked(){
    debugger;
    this.onBtnClick.emit();
  }

}
