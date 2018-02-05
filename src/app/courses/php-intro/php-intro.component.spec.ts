import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpIntroComponent } from './php-intro.component';

describe('PhpIntroComponent', () => {
  let component: PhpIntroComponent;
  let fixture: ComponentFixture<PhpIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
