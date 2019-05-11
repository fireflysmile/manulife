import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  badpData: [];
  sedpData: [];
  statisticData: [];
  aboutBADP: {};
  aboutSEDP: {};
  addRotation: {};

  isShowAboutBADP = false;
  isShowAboutSEDP = false;

  constructor(
    private dataServices: DataService
  ) { }

  ngOnInit() {
    this.onload();
  }

  onload() {
    this.dataServices.get('dashboard.json').subscribe((datas: any) => {
      this.badpData = datas.badpData;
      this.sedpData = datas.sedpData;
      this.statisticData = datas.statisticData;
      this.aboutBADP = datas.aboutBADP;
      this.aboutSEDP = datas.aboutSEDP;
      this.addRotation = datas.addRotation;
    });
  }

  badpJourney(value) {
    // console.log(value);
  }

  badpParticipants(value) {
    // console.log(value);
  }

  sedpJourney(value) {
    // console.log(value);
  }

  sedpParticipants(value) {
    // console.log(value);
  }

  showAboutBADP() {
    this.isShowAboutBADP = true;
  }

  showAboutSEDP() {
    this.isShowAboutSEDP = true;
  }

  backToStatistic() {
    this.isShowAboutBADP = false;
    this.isShowAboutSEDP = false;
  }
}
