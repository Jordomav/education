import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart4Component } from './angular-part4.component';

describe('AngularPart4Component', () => {
  let component: AngularPart4Component;
  let fixture: ComponentFixture<AngularPart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
