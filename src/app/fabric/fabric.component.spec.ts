import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricComponent } from './fabric.component';

describe('FabricComponent', () => {
  let component: FabricComponent;
  let fixture: ComponentFixture<FabricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
