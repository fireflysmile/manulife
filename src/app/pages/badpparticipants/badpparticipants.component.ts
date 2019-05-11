import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-badpparticipants',
  templateUrl: './badpparticipants.component.html',
  styleUrls: ['./badpparticipants.component.scss']
})
export class BADPParticipantsComponent implements OnInit {
  datas = [];
  isOpenParticipantModal = false;
  participant = {};

  isAdmin = true;

  isOpenModalAddParticipant = false;

  listOptions = []

  optionSelected = null;

  constructor(
    private dataServices: DataService
  ) {
    this.listOptions = Array.from({ length: 5 }, (_, index) => ({
      value: 2019 - index,
      label: 2019 - index
    }))
    this.optionSelected = this.listOptions[0];
  }

  ngOnInit() {
    this.onload();
  }

  onload() {
    this.dataServices.get('badp-participants.json').subscribe((datas: any) => {
      this.datas = datas;
    })
  }

  showParticipantModal(participant) {
    this.isOpenParticipantModal = true
    this.participant = participant
  }

  afterCloseParticipantModal() {
    this.isOpenParticipantModal = false
  }

  handleSelectOption({ selected }) {
    this.optionSelected = selected;
  }

  showModalAddParticipant() {
    this.isOpenModalAddParticipant = true;
  }

  closeModalAddParticipant() {
    this.isOpenModalAddParticipant = false;
  }
}
