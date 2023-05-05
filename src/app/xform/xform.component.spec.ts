import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XformComponent } from './xform.component';

describe('XformComponent', () => {
  let component: XformComponent;
  let fixture: ComponentFixture<XformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
