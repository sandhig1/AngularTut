import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mypageheader } from './mypageheader';

describe('Mypageheader', () => {
  let component: Mypageheader;
  let fixture: ComponentFixture<Mypageheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mypageheader],
    }).compileComponents();

    fixture = TestBed.createComponent(Mypageheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
