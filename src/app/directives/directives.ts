import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-directives',
  imports: [Mypageheader],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {}
