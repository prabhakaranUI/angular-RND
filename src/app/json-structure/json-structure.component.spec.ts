import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonStructureComponent } from './json-structure.component';

describe('JsonStructureComponent', () => {
  let component: JsonStructureComponent;
  let fixture: ComponentFixture<JsonStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
