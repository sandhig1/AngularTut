import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly title = signal('Angular-Tutorial');
  
  username:string ="";
  password:string ="";

  private router1 = inject(Router);

  loggedInFlag=false;

  login(){
    debugger;

    if (this.username.trim() == ""){
      alert("Please Enter User Name")
    }
    else if (this.password.trim() == "") {
      alert("Please Enter Password")
    } 
    else{

      if (this.username.trim() == "superadmin"){
        if (this.password.trim() == "admin"){
          this.loggedInFlag = true;
          localStorage.setItem("UserName", "Super Admin");
          localStorage.setItem("UserRole", "sa");

          this.router1.navigate(['/dashboard']);
        }
        else{
          alert("Invalid Credentials"); 
        }
      }
      else if (this.username.trim() == "admin"){
        if (this.password.trim() == "admin"){
          this.loggedInFlag = true;
          localStorage.setItem("UserName", "Admin");
          localStorage.setItem("UserRole", "a");

          this.router1.navigate(['/dashboard']);
        }
        else{
          alert("Invalid Credentials"); 
        }
      }
      else if (this.username.trim() == "mukesh123"){
        if (this.password.trim() == "admin"){
          this.loggedInFlag = true;
          localStorage.setItem("UserName", "Mukesh");
          localStorage.setItem("UserRole", "e");

          this.router1.navigate(['/enquirylist']);
        }
        else{
          alert("Invalid Credentials"); 
        }
      }
      else{
        alert("Invalid Credentials");
      }
      
    }
  }

}
