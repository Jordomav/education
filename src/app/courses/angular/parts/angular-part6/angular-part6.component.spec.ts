import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart6Component } from './angular-part6.component';

describe('AngularPart6Component', () => {
  let component: AngularPart6Component;
  let fixture: ComponentFixture<AngularPart6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
