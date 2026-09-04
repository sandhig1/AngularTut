import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facade } from './facade';

describe('Facade', () => {
  let component: Facade;
  let fixture: ComponentFixture<Facade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Facade],
    }).compileComponents();

    fixture = TestBed.createComponent(Facade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
