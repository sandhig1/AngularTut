import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-components',
  imports: [Mypageheader],
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export class Components {}
