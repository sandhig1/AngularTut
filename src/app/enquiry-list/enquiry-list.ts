import { Component, Signal, WritableSignal, inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Enquiryserv } from '../../services/enquiryserv';
import { APIUrl } from '../../constants/global.constant';

@Component({
  selector: 'app-enquiry-list',
  imports: [DatePipe, JsonPipe],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css',
})
export class EnquiryList {

  private router1 = inject(Router);
  
  http = inject(HttpClient);
  enqserv = inject(Enquiryserv);

  enquiryList: WritableSignal<any[]> = signal([]);

  openEnquiryCreate(){
    this.router1.navigate(['/enquiry']);
  }
  
  constructor(){
    this.getEnquiryList();
  }

  getEnquiryList(){
    debugger;
    
    /*this.http.get(APIUrl + "Enquiry/getEnquiries").subscribe({
      next:(res:any)=>{
        debugger;
        //alert('Without enquiry service');

        this.enquiryList.set(res.data);
      }
    });*/

    this.enqserv.getEnquiries().subscribe({
      next:(res:any)=>{
        debugger;
        console.log('getting enquiry list from enquiry service');

        this.enquiryList.set(res.data);
      }
    });
  }

  router = inject(Router);

  editEnquiry(id:number){
    this.router.navigate(["/enquiry/" + id]);
  }

  deleteEnquiry(id:number){
    this.http.delete(APIUrl + "Enquiry/deleteEnquiry?id=" + id).subscribe({
      next:(res:any)=>{
        debugger;

        if (res.status){
          this.getEnquiryList();
          alert("Enquiry Deleted Successfully");
        }
        else{
          alert("error while deleting Enquiry : " + res.msg);
        }
      }
    })
  }
}
