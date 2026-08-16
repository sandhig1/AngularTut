import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statelist } from './statelist';

describe('Statelist', () => {
  let component: Statelist;
  let fixture: ComponentFixture<Statelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statelist],
    }).compileComponents();

    fixture = TestBed.createComponent(Statelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
