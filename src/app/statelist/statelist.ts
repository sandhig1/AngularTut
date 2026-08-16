import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { Stateservice } from '../../services/stateservice/stateservice';

import { APIUrl } from '../../constants/global.constant';
import { Mycard } from '../../reusable-comp/mycard/mycard';

@Component({
  selector: 'app-statelist',
  imports: [Mycard],
  templateUrl: './statelist.html',
  styleUrl: './statelist.css',
})
export class Statelist {
  private router1 = inject(Router);
  
  http = inject(HttpClient);
  stateserv = inject(Stateservice);

  StateList: WritableSignal<any[]> = signal([]);

  openStateCreate(){
    this.router1.navigate(['/state']);
  }
  
  constructor(){
    this.getStateList();
  }

  getStateList(){
    debugger;
    
    /*this.http.get(APIUrl + "State/getEnquiries").subscribe({
      next:(res:any)=>{
        debugger;
        //alert('Without State service');

        this.StateList.set(res.data);
      }
    });*/

    this.stateserv.getStates().subscribe({
      next:(res:any)=>{
        debugger;
        console.log('getting State list from State service');

        this.StateList.set(res.data);
      }
    });
  }

  router = inject(Router);

  editState(id:number){
    this.router.navigate(["/state/" + id]);
  }

  deleteState(id:number){
    this.http.delete(APIUrl + "State/deleteState?id=" + id).subscribe({
      next:(res:any)=>{
        debugger;

        if (res.status){
          this.getStateList();
          alert("State Deleted Successfully");
        }
        else{
          alert("error while deleting State : " + res.msg);
        }
      }
    })
  }
}
