import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetetionComponent } from './change-detetion.component';

describe('ChangeDetetionComponent', () => {
  let component: ChangeDetetionComponent;
  let fixture: ComponentFixture<ChangeDetetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetetionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
