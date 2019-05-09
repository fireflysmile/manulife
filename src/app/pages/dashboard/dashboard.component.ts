import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.onload();
  }

  onload() {
    this.dataService.get('dashboard.json').subscribe(
      (datas: any) => {
        this.datas = datas;
      }
    );
  }

}
