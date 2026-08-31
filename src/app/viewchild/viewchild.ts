import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-viewchild',
  imports: [Mypageheader],
  templateUrl: './viewchild.html',
  styleUrl: './viewchild.css',
})
export class Viewchild {}
