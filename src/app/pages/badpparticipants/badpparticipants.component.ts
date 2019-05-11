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

  constructor(
    private dataServices: DataService
  ) { }

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
}
