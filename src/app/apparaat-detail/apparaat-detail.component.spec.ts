import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparaatDetailComponent } from './apparaat-detail.component';

describe('ApparaatDetailComponent', () => {
  let component: ApparaatDetailComponent;
  let fixture: ComponentFixture<ApparaatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparaatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparaatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
