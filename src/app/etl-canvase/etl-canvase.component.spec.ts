import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtlCanvaseComponent } from './etl-canvase.component';

describe('EtlCanvaseComponent', () => {
  let component: EtlCanvaseComponent;
  let fixture: ComponentFixture<EtlCanvaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtlCanvaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtlCanvaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
