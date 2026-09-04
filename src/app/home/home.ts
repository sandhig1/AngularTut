import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { globalMenus } from '../../constants/global.constant';
import { FormsModule } from '@angular/forms';
import { Userservice } from '../../services/userservice/userservice';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  router = inject(Router);

  /*Code for Filtered Menu based on User Role*/
  userName = localStorage.getItem("UserName");
  userRole = localStorage.getItem("UserRole");

  filteredMainMenus = globalMenus.mainMenu.filter((m:any)=>m.allowRoles.includes(this.userRole));
  filteredMenus = globalMenus.menuItems.filter((m:any)=>m.allowRoles.includes(this.userRole));

  /*Code for Subject and BehaviorSubject*/
  selectedRole:string = "";
  
  userServ = inject(Userservice);

  changeSelectedRole(){
    this.userServ.$subjectUserRole.next(this.selectedRole);
    this.userServ.$behaviorSubjectUserRole.next(this.selectedRole);
  }
  /*End Code for Subject and BehaviorSubject*/

  
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
