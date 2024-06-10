import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgjsComponent } from './svgjs.component';

describe('SvgjsComponent', () => {
  let component: SvgjsComponent;
  let fixture: ComponentFixture<SvgjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
