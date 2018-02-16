import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Web4begComponent } from './web4beg.component';

describe('Web4begComponent', () => {
  let component: Web4begComponent;
  let fixture: ComponentFixture<Web4begComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Web4begComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Web4begComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
