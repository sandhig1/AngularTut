import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flows',
  imports: [FormsModule],
  templateUrl: './control-flows.html',
  styleUrl: './control-flows.css',
})
export class ControlFlows {
  isdivShow:boolean=true;
  isOfferAvailable:boolean=false;
  SelectedStatus:string="Generated";

  cityList=['Pune', 'Thane', 'Mumbai', 'Chennai', 'Bangalore'];
  studentList = [
    {id:1, name:"Sandhi", city:"Mumbai", rollno:1001},
    {id:2, name:"Ajay", city:"Pune", rollno:1001},
    {id:3, name:"Ramesh", city:"Dehradun", rollno:1003},
    {id:4, name:"Kishore", city:"Bangalore", rollno:1004}
  ]

  onDivShowHide(){
    this.isdivShow=!this.isdivShow;

  }
}
