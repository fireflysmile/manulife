import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BADPParticipantsComponent } from './badpparticipants.component';

describe('BADPParticipantsComponent', () => {
  let component: BADPParticipantsComponent;
  let fixture: ComponentFixture<BADPParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BADPParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BADPParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
