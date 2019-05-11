import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-statistic-program-table',
  templateUrl: './statistic-program-table.component.html',
  styleUrls: ['./statistic-program-table.component.scss']
})
export class StatisticProgramTableComponent implements OnInit {
  @Input() programStatistic;
  @Output() showBADP = new EventEmitter;
  @Output() showSEDP = new EventEmitter;

  // isShowAboutBADP = true;
  constructor() { }

  ngOnInit() {
  }

  showAboutBadp() {
    this.showBADP.emit();
  }

  showAboutSedp() {
    this.showSEDP.emit();
  }
}
