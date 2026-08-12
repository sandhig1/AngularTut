import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOps } from './crud-ops';

describe('CrudOps', () => {
  let component: CrudOps;
  let fixture: ComponentFixture<CrudOps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudOps],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudOps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
