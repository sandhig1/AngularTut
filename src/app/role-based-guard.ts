import { CanActivateFn, Router } from '@angular/router';
import { globalMenus } from '../constants/global.constant';
import { inject } from '@angular/core';

export const roleBasedGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);

  const routeName = state.url.split('/')[1];
  const menuItems = globalMenus.menuItems;

  const menuItem = menuItems.find(x=>x.routeName==routeName);
  const userRole = localStorage.getItem("UserRole");

  if (userRole != null){
    if (menuItem?.allowRoles.includes(userRole)){
      return true
    }
    else {
      router.navigate(['/notfound']);
    }
  }
  else{
    router.navigate(['/notfound']);
  }
  
  return true;
};
