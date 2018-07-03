import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicPart1Component } from './ionic-part1.component';

describe('IonicPart1Component', () => {
  let component: IonicPart1Component;
  let fixture: ComponentFixture<IonicPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
