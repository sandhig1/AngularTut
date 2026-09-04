import { Service } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Service()
export class Userservice {
    $subjectUserRole = new Subject<string>();
    $behaviorSubjectUserRole = new BehaviorSubject<string>("Admin");
    
}
