import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBoundingBoxComponent } from './image-bounding-box.component';

describe('ImageBoundingBoxComponent', () => {
  let component: ImageBoundingBoxComponent;
  let fixture: ComponentFixture<ImageBoundingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBoundingBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBoundingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
