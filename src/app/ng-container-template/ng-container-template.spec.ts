import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerTemplate } from './ng-container-template';

describe('NgContainerTemplate', () => {
  let component: NgContainerTemplate;
  let fixture: ComponentFixture<NgContainerTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContainerTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(NgContainerTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
