import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart9Component } from './angular-part9.component';

describe('AngularPart9Component', () => {
  let component: AngularPart9Component;
  let fixture: ComponentFixture<AngularPart9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
