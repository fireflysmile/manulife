import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-badp-sedp',
  templateUrl: './badp-sedp.component.html',
  styleUrls: ['./badp-sedp.component.scss']
})
export class BadpSedpComponent implements OnInit {
  @Input() specificData;
  @Output() activateJourney = new EventEmitter();
  @Output() activateParticipants = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  onclickJourney() {
    this.activateJourney.emit();
  }
  onclickParticipants() {
    this.activateParticipants.emit();
  }

}
