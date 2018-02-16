import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeIntroComponent } from './node-intro.component';

describe('NodeIntroComponent', () => {
  let component: NodeIntroComponent;
  let fixture: ComponentFixture<NodeIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
