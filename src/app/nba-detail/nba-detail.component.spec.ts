import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaDetailComponent } from './nba-detail.component';

describe('NbaDetailComponent', () => {
  let component: NbaDetailComponent;
  let fixture: ComponentFixture<NbaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
