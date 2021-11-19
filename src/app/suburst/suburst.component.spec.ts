import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuburstComponent } from './suburst.component';

describe('SuburstComponent', () => {
  let component: SuburstComponent;
  let fixture: ComponentFixture<SuburstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuburstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuburstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
