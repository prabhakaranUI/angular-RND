import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDatatableComponent } from './dynamic-datatable.component';

describe('DynamicDatatableComponent', () => {
  let component: DynamicDatatableComponent;
  let fixture: ComponentFixture<DynamicDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
