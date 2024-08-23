import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOprtatorsComponent } from './rxjs-oprtators.component';

describe('RxjsOprtatorsComponent', () => {
  let component: RxjsOprtatorsComponent;
  let fixture: ComponentFixture<RxjsOprtatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOprtatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOprtatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
