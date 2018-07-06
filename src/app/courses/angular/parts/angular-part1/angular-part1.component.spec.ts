import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart1Component } from './angular-part1.component';

describe('AngularPart1Component', () => {
  let component: AngularPart1Component;
  let fixture: ComponentFixture<AngularPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
