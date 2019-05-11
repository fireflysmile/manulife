import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadpSedpComponent } from './badp-sedp.component';

describe('BadpSedpComponent', () => {
  let component: BadpSedpComponent;
  let fixture: ComponentFixture<BadpSedpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadpSedpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadpSedpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
