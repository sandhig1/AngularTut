import { Component, inject, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-signal-forms',
  imports: [MatTabsModule, FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  courseModel = signal({
    CourseId:0,
    CourseCode:"",
    CourseName:"",
    Duration:10,
    Fees:5000
  });

  courseForm = form(this.courseModel, (schema)=>{
    required(schema.CourseCode, {message: 'Course Code is required'}),
    required(schema.CourseName, {message: 'Course Code is required'}),
    minLength(schema.CourseCode, 5, {message: 'Min length should >= 5'}),
    maxLength(schema.CourseCode, 10, {message: 'Max length should <= 10'}),
    minLength(schema.CourseName, 5, {message: 'Min length should >= 5'}),
    maxLength(schema.CourseName, 50, {message: 'Max length should <= 50'})
  });

  saveCourse(){
    debugger;
    const formvalue = this.courseForm().value();
  }
}
