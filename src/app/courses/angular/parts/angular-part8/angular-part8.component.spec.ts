import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart8Component } from './angular-part8.component';

describe('AngularPart8Component', () => {
  let component: AngularPart8Component;
  let fixture: ComponentFixture<AngularPart8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
