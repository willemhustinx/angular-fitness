import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatenComponent } from './apparaten.component';

describe('ApparatenComponent', () => {
  let component: ApparatenComponent;
  let fixture: ComponentFixture<ApparatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
