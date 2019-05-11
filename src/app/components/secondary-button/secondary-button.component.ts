import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent implements OnInit {
  @Input() textBtn;
  constructor() { }

  ngOnInit() {
  }

}
