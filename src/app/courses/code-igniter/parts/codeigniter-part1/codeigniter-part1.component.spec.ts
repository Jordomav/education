import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeigniterPart1Component } from './codeigniter-part1.component';

describe('CodeigniterPart1Component', () => {
  let component: CodeigniterPart1Component;
  let fixture: ComponentFixture<CodeigniterPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeigniterPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeigniterPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
