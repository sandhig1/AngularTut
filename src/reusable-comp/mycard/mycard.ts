import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mycard',
  imports: [],
  templateUrl: './mycard.html',
  styleUrl: './mycard.css',
})
export class Mycard {
  @Input() HeaderText:String="";
  @Input() HeaderBGColor:String="orange";


}
