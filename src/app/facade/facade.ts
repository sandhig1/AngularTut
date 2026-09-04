import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-facade',
  imports: [Mypageheader],
  templateUrl: './facade.html',
  styleUrl: './facade.css',
})
export class Facade {}
