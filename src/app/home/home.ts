import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { globalMenus } from '../../constants/global.constant';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  router = inject(Router);

  userName = localStorage.getItem("UserName");
  userRole = localStorage.getItem("UserRole");

  filteredMenus = globalMenus.menuItems.filter((m:any)=>m.allowRoles.includes(this.userRole));

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
