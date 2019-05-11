import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticProgramTableComponent } from './statistic-program-table.component';

describe('StatisticProgramTableComponent', () => {
  let component: StatisticProgramTableComponent;
  let fixture: ComponentFixture<StatisticProgramTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticProgramTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticProgramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
