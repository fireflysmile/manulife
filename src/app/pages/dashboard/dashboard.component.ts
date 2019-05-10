import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  badp = [];
  texts: {};

  constructor(
    private dataServices: DataService
  ) { }

  ngOnInit() {
    this.onload();
  }

  onload() {
    this.dataServices.get('dashboard.json').subscribe((datas: any) => {
      this.badp = datas.badp;
      this.texts = datas.abc;

      console.log(this.texts)
    })
  }

}
