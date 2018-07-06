import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart11Component } from './angular-part11.component';

describe('AngularPart11Component', () => {
  let component: AngularPart11Component;
  let fixture: ComponentFixture<AngularPart11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
