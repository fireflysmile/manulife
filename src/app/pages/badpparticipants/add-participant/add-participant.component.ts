import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss']
})
export class AddParticipantComponent implements OnInit {

  listProgram = [
    { value: 'badp', label: 'BADP' },
    { value: 'sedp', label: 'SEDP' },
  ]

  optionSelected = this.listProgram[0];

  constructor() { }

  ngOnInit() {
  }

  handleSelectOption({ selected }) {
    this.optionSelected = selected;
  }
}
