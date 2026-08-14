import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-routing',
  imports: [Mypageheader],
  templateUrl: './routing.html',
  styleUrl: './routing.css',
})
export class Routing {}
