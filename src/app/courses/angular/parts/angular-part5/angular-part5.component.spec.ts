import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart5Component } from './angular-part5.component';

describe('AngularPart5Component', () => {
  let component: AngularPart5Component;
  let fixture: ComponentFixture<AngularPart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
