import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomShadesComponent } from './random-shades.component';

describe('RandomShadesComponent', () => {
  let component: RandomShadesComponent;
  let fixture: ComponentFixture<RandomShadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomShadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomShadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
