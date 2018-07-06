import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart7Component } from './angular-part7.component';

describe('AngularPart7Component', () => {
  let component: AngularPart7Component;
  let fixture: ComponentFixture<AngularPart7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
