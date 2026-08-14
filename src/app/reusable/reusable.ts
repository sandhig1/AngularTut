import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-reusable',
  imports: [Mypageheader],
  templateUrl: './reusable.html',
  styleUrl: './reusable.css',
})
export class Reusable {}
