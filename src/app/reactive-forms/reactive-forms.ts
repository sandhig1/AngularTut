import { JsonPipe } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, FormsModule,  Validators, NgModel, FormBuilder } from '@angular/forms';
import { form, validate } from '@angular/forms/signals';
import { MatTabsModule } from '@angular/material/tabs';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe, MatTabsModule, Mypageheader],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

  formtype:string="FG";

  setFormType(val:string){
    this.formtype= val;
  }

  userForm: FormGroup = new FormGroup({
    UserId: new FormControl(0),
    UserName: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    FullName: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    Address: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    PhoneNo: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    EmailAdd: new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(100)])    
  })

  saveUser(){
    debugger;

    if (this.userForm.invalid){
      alert("Detail not provided. Please check the detail.")
    }
    else{
      const formdata=this.userForm.value;

      alert("Detailed Provided Properly");
      alert("Form Data : " + JSON.stringify(formdata));
    }
  } //End saveUser()

  //Form Buildier code

  fb = inject(FormBuilder)
  studentForm = this.fb.group({
    StudentId : [0],
    StudentName: ["", (Validators.required)],
    Address:["", (Validators.required)],
    PhoneNo:["", (Validators.required)],
    EmailAdd:["", (Validators.required)]
  })

  saveStudent(){
    debugger;

    if (this.studentForm.invalid){
      alert('Invalid Detail');
    }
    else{
      alert('Valid Detail : ' + JSON.stringify(this.studentForm.value))
    }
  }
}
