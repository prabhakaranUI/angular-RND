import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidragComponent } from './multidrag.component';

describe('MultidragComponent', () => {
  let component: MultidragComponent;
  let fixture: ComponentFixture<MultidragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultidragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultidragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
