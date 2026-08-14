import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mypageheader',
  imports: [],
  standalone: true,
  templateUrl: './mypageheader.html',
  styleUrl: './mypageheader.css',
})
export class Mypageheader {

  @Input() HeaderTitle: string= "";
  @Input() HeaderText: string= "";

}
