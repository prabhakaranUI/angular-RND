import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XsltComponent } from './xslt.component';

describe('XsltComponent', () => {
  let component: XsltComponent;
  let fixture: ComponentFixture<XsltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XsltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XsltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
