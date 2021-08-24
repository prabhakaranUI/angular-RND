import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportHtmlComponent } from './export-html.component';

describe('ExportHtmlComponent', () => {
  let component: ExportHtmlComponent;
  let fixture: ComponentFixture<ExportHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
