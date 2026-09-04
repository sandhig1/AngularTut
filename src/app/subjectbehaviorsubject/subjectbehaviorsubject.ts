import { Component, DestroyRef, inject } from '@angular/core';
import { Mypageheader } from '../../reusable-comp/mypageheader/mypageheader';
import { Userservice } from '../../services/userservice/userservice';
import { distinctUntilChanged, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-subjectbehaviorsubject',
  imports: [Mypageheader],
  templateUrl: './subjectbehaviorsubject.html',
  styleUrl: './subjectbehaviorsubject.css',
})
export class Subjectbehaviorsubject {
  userServ = inject(Userservice);

  private destroyRef = inject(DestroyRef);

  constructor() {
    this.userServ.$subjectUserRole.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((role:String) => {
      alert("Subject User Role: " + role);
    })

    this.userServ.$behaviorSubjectUserRole.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((role:String) => {
      alert("BehaviorSubject User Role: " + role);
    })
  }

}
