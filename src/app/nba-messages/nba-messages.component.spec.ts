import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaMessagesComponent } from './nba-messages.component';

describe('NbaMessagesComponent', () => {
  let component: NbaMessagesComponent;
  let fixture: ComponentFixture<NbaMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
