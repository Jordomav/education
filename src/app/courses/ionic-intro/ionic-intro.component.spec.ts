import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicIntroComponent } from './ionic-intro.component';

describe('IonicIntroComponent', () => {
  let component: IonicIntroComponent;
  let fixture: ComponentFixture<IonicIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
