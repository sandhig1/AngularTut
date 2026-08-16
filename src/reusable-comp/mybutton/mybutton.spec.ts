import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mybutton } from './mybutton';

describe('Mybutton', () => {
  let component: Mybutton;
  let fixture: ComponentFixture<Mybutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mybutton],
    }).compileComponents();

    fixture = TestBed.createComponent(Mybutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
