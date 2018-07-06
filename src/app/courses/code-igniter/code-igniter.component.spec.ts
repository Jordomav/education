import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeIgniterComponent } from './code-igniter.component';

describe('CodeIgniterComponent', () => {
  let component: CodeIgniterComponent;
  let fixture: ComponentFixture<CodeIgniterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeIgniterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeIgniterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
