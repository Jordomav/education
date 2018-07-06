import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart2Component } from './angular-part2.component';

describe('AngularPart2Component', () => {
  let component: AngularPart2Component;
  let fixture: ComponentFixture<AngularPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
