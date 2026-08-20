import { Component, inject, signal, WritableSignal } from '@angular/core';
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

  countVal:number=0;

  signalServ = inject(Signalservice);

  _count = this.signalServ._count
  count = this.signalServ.count;

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
}
