import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lessonhome } from './lessonhome';

describe('Lessonhome', () => {
  let component: Lessonhome;
  let fixture: ComponentFixture<Lessonhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lessonhome],
    }).compileComponents();

    fixture = TestBed.createComponent(Lessonhome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
