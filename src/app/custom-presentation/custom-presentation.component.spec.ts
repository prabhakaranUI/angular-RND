import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPresentationComponent } from './custom-presentation.component';

describe('CustomPresentationComponent', () => {
  let component: CustomPresentationComponent;
  let fixture: ComponentFixture<CustomPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
