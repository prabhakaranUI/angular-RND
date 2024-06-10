import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToWebpComponent } from './image-to-webp.component';

describe('ImageToWebpComponent', () => {
  let component: ImageToWebpComponent;
  let fixture: ComponentFixture<ImageToWebpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageToWebpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageToWebpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
