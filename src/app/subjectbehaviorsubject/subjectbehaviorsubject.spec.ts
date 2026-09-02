import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subjectbehaviorsubject } from './subjectbehaviorsubject';

describe('Subjectbehaviorsubject', () => {
  let component: Subjectbehaviorsubject;
  let fixture: ComponentFixture<Subjectbehaviorsubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subjectbehaviorsubject],
    }).compileComponents();

    fixture = TestBed.createComponent(Subjectbehaviorsubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
