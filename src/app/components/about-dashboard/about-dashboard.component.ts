import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-dashboard',
  templateUrl: './about-dashboard.component.html',
  styleUrls: ['./about-dashboard.component.scss']
})
export class AboutDashboardComponent implements OnInit {
  @Input() aboutData;
  constructor() { }

  ngOnInit() {
  }

}
