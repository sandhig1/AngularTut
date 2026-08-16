import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stateservice } from '../../services/stateservice/stateservice';

import { APIUrl } from '../../constants/global.constant';
import { FormsModule } from '@angular/forms';
import { Mybutton } from '../../reusable-comp/mybutton/mybutton';

@Component({
  selector: 'app-state',
  imports: [FormsModule, Mybutton],
  templateUrl: './state.html',
  styleUrl: './state.css',
})
export class State {
  stateObj=signal({
    StateId : 0,
    StateCode : "",
    StateName : "",
  })

  private route = inject(ActivatedRoute); 
  private router = inject(Router);

  private stateId=0;

  http = inject(HttpClient);


  ngOnInit() :void {
    debugger;
    this.stateId = Number(this.route.snapshot.paramMap.get("id"));
    this.getStateDetail(this.stateId);
  }

  getStateDetail(id : number){
    debugger;
    
    this.http.get(APIUrl + "State/getStateDetail?id=" + id).subscribe({
      next:(res:any)=>{
        debugger;

        this.stateObj.set(res.data);
      }
    });
  }

  saveState(){
    if (this.stateObj().StateId ==0){
      this.http.post(APIUrl + "State/saveState", this.stateObj()).subscribe({
        next:(res:any)=>{
          debugger;

          if (res.status){
            alert("State Saved Successfully");
            this.getStateDetail(0);
          }
          else{
            alert("error while Saving State : " + res.msg);
          }
        }
      })
    }
    else {
      this.http.put(APIUrl + "State/updateState", this.stateObj()).subscribe({
        next:(res:any)=>{
          debugger;

          if (res.status){
            alert("State Updated Successfully");
          }
          else{
            alert("error while Updating State : " + res.msg);
          }
        }
      })
    }    
  }

  createState(){
    this.getStateDetail(0);
  }

  goToStateList(){
    this.router.navigate(["/statelist"]);
  }
}
