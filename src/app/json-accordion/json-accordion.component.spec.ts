import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAccordionComponent } from './json-accordion.component';

describe('JsonAccordionComponent', () => {
  let component: JsonAccordionComponent;
  let fixture: ComponentFixture<JsonAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
