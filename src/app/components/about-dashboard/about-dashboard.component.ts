import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-dashboard',
  templateUrl: './about-dashboard.component.html',
  styleUrls: ['./about-dashboard.component.scss']
})
export class AboutDashboardComponent implements OnInit {
  @Input() aboutData;
  @Output() hideAboutModal = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeAboutModal() {
    this.hideAboutModal.emit();
  }
}
