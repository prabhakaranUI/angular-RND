import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTextDisplayComponent } from './metadata-text-display.component';

describe('MetadataTextDisplayComponent', () => {
  let component: MetadataTextDisplayComponent;
  let fixture: ComponentFixture<MetadataTextDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataTextDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataTextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
