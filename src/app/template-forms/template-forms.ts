import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule, JsonPipe, MatTabsModule],
  templateUrl: './template-forms.html',
  styleUrl: './template-forms.css',
})
export class TemplateForms {
  companyObj: any = {
    CompanyId: 0,
    CompanyName:"",
    Address: "",
    PhoneNo:"",
    EmailAdd:"",
  }

  saveCompany(formRef:NgForm){
    debugger;

    if (formRef.invalid){
      alert("Detail not provided. Please check the detail.")
    }
    else{
      const formdata=this.companyObj;

      alert("Detailed Provided Properly");
      alert("Form Data : " + JSON.stringify(formdata));
    }
  }
}
