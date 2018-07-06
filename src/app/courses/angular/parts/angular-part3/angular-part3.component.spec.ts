import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart3Component } from './angular-part3.component';

describe('AngularPart3Component', () => {
  let component: AngularPart3Component;
  let fixture: ComponentFixture<AngularPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
