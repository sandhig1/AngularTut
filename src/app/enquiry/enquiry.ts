import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryList } from '../enquiry-list/enquiry-list';
import { APIUrl } from '../../constants/global.constant';

@Component({
  selector: 'app-enquiry',
  imports: [FormsModule, JsonPipe],
  templateUrl: './enquiry.html',
  styleUrl: './enquiry.css',
})
export class Enquiry implements OnInit {

  enquiryObj=signal({
    EnquiryId : 0,
    EnquiryNo : "",
    EnquiryDate : "2026-01-10",
    CustomerName : "",
    CustomerAddress : "",
    PhoneNo : "",
    EmailAdd : "",
    EnquiryDetail : "",
  })

  private route = inject(ActivatedRoute); 
  private router = inject(Router);

  private enquiryId=0;

  http = inject(HttpClient);


  ngOnInit() :void {
    debugger;
    this.enquiryId = Number(this.route.snapshot.paramMap.get("id"));
    this.getEnquiryDetail(this.enquiryId);
  }

  getEnquiryDetail(id : number){
    debugger;
    
    this.http.get(APIUrl + "Enquiry/getEnquiryDetail?id=" + id).subscribe({
      next:(res:any)=>{
        debugger;

        this.enquiryObj.set(res.data);
      }
    });
  }

  saveEnquiry(){
    if (this.enquiryObj().EnquiryId ==0){
      this.http.post(APIUrl + "Enquiry/saveEnquiry", this.enquiryObj()).subscribe({
        next:(res:any)=>{
          debugger;

          if (res.status){
            alert("Enquiry Saved Successfully");
            this.getEnquiryDetail(0);
          }
          else{
            alert("error while Saving Enquiry : " + res.msg);
          }
        }
      })
    }
    else {
      this.http.put(APIUrl + "Enquiry/updateEnquiry", this.enquiryObj()).subscribe({
        next:(res:any)=>{
          debugger;

          if (res.status){
            alert("Enquiry Updated Successfully");
          }
          else{
            alert("error while Updating Enquiry : " + res.msg);
          }
        }
      })
    }    
  }

  createEnquiry(){
    this.getEnquiryDetail(0);
  }

  goToEnquiryList(){
    this.router.navigate(["/enquirylist"]);
  }
}
