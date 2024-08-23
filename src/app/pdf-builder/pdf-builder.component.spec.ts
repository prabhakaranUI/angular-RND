import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfBuilderComponent } from './pdf-builder.component';

describe('PdfBuilderComponent', () => {
  let component: PdfBuilderComponent;
  let fixture: ComponentFixture<PdfBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
