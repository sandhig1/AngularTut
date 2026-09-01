import { Component } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-container-template',
  imports: [Mypageheader, NgFor, NgIf],
  templateUrl: './ng-container-template.html',
  styleUrl: './ng-container-template.css',
})
export class NgContainerTemplate {
  studentList = [
    {"StudentId": 1, "StudentCode": "S001", "StudentName": "John", "Active": false},
    {"StudentId": 2, "StudentCode": "S002", "StudentName": "Akshay", "Active": true},
    {"StudentId": 3, "StudentCode": "S003", "StudentName": "Ramesh", "Active": true},
    {"StudentId": 4, "StudentCode": "S004", "StudentName": "Bhupesh", "Active": true},
    {"StudentId": 5, "StudentCode": "S005", "StudentName": "Manish", "Active": false},    
  ]
}
