import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart10Component } from './angular-part10.component';

describe('AngularPart10Component', () => {
  let component: AngularPart10Component;
  let fixture: ComponentFixture<AngularPart10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
