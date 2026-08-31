import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-interceptor',
  imports: [Mypageheader],
  templateUrl: './interceptor.html',
  styleUrl: './interceptor.css',
})
export class Interceptor {}
