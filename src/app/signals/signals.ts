import { Component, inject, isWritableSignal, signal, WritableSignal, effect, computed } from '@angular/core';
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
  //For using Signal Set function
  empName:WritableSignal<string>=signal("Rajesh");
  empNameVal:string="";

  //For using Signal Update function
  courseName:WritableSignal<string>=signal("Angular 22");
  courseNameVal:string="";

  //for Using Signal Effect Function
  userName:WritableSignal<string>=signal("John Doe");
  userNameVal:string="";
  userNameChanged:boolean=false;

  //For Checking Signal Readonly option
  signalServ = inject(Signalservice);

  _count = this.signalServ._count
  count = this.signalServ.count;
  countVal:number=0;

  //For Computed Signal
  price:WritableSignal<number>=signal(1);
  qty:WritableSignal<number>=signal(1);

  totAmt=computed(()=>this.price() * this.qty()) 

  constructor(){
    effect(()=>{
      //alert('effect');
      console.log("username : " + this.userName);
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
    //alert('UserKeyPress');
    this.userNameChanged = false;
  }
  

}
