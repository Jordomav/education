import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPart12Component } from './angular-part12.component';

describe('AngularPart12Component', () => {
  let component: AngularPart12Component;
  let fixture: ComponentFixture<AngularPart12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPart12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPart12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
