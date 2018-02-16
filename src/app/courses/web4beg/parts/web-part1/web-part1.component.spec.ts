import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPart1Component } from './web-part1.component';

describe('WebPart1Component', () => {
  let component: WebPart1Component;
  let fixture: ComponentFixture<WebPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
