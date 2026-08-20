import { Component, inject, isWritableSignal, signal, WritableSignal, effect } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';
import { FormsModule } from '@angular/forms';
import { Signalservice } from '../../services/signalservice/signalservice';

@Component({
  selector: 'app-signals',
  imports: [Mypageheader, FormsModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  empName:WritableSignal<string>=signal("Rajesh");
  empNameVal:string="";

  courseName:WritableSignal<string>=signal("Angular 22");
  courseNameVal:string="";

  userName:WritableSignal<string>=signal("John Doe");
  userNameVal:string="";
  userNameChanged:boolean=false;

  countVal:number=0;

  signalServ = inject(Signalservice);

  _count = this.signalServ._count
  count = this.signalServ.count;

  constructor(){
    effect(()=>{
      alert('effect');
      this.userNameChanged = true;
    })
  }

  changeEmpNameUsingSet(){
    this.empName.set(this.empNameVal);
    
  }

  changeCourseNameUsingUpdate(){
    this.courseName.update(() => this.courseNameVal);
  }

  addCount(){
    this.countVal = Number(this.countVal);
    this.signalServ.increment(this.countVal);
  }

  changeUserName(){
    this.userName.update(() => this.userNameVal);
  }

  userNameKeyPress(event: KeyboardEvent){
    alert('UserKeyPress');
    this.userNameChanged = false;
  }
  

}
