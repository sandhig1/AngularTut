import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apphome',
  imports: [],
  templateUrl: './apphome.html',
  styleUrl: './apphome.css',
})
export class Apphome {
  protected readonly title = signal('Angular-Tutorial');
  constructor(private router:Router) {};
  //private router1 = inject(Router);

  loginNow(){
      this.router.navigate(['/login']);
  }
}
