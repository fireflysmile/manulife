import { Component, OnInit, Input } from '@angular/core';

declare const $;

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.scss']
})
export class ParticipantDetailComponent implements OnInit {

  rotationsHistory = [
    {
      id: 'id1',
      year: 2019,
      rotation: 'Thornton',
      rotation_status: 'active',
      manager: 'Mdo',
      note: 'Notes about participant’s experience in the role. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.',
    },
    {
      id: 'id2',
      year: 2019,
      rotation: 'Thornton',
      rotation_status: 'pending',
      manager: 'Mdo',
      note: 'Notes about participant’s experience in the role. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.',
    },
    {
      id: 'id3',
      year: 2019,
      rotation: 'Thornton',
      rotation_status: 'blocked',
      manager: 'Mdo',
      note: 'Notes about participant’s experience in the role. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.',
    }
  ]

  stylesRotationStatus = {
    'active': { color: '#00A758' },
    'pending': { color: '#0000C1' },
    'blocked': { color: 'red' },
  } 

  showRotationsHistoryNote = []

  @Input() participant: object;

  constructor() { }

  ngOnInit() {
  }

  ngOnViewInit() {
  }

  get isShowAllNotes() {
    return this.showRotationsHistoryNote.length === this.rotationsHistory.length
  }

  isShowNoteById(id) {
    return this.showRotationsHistoryNote.includes(id)
  }

  toggleAllRotationHistoryRow() {
    this.showRotationsHistoryNote = this.isShowAllNotes ? [] : this.rotationsHistory.map(item => item.id);
  }

  toggleRotationHistoryRow(id) {
    if (this.isShowNoteById(id)) {
      this.showRotationsHistoryNote = this.showRotationsHistoryNote.filter(item => id !== item)
    } else {
      this.showRotationsHistoryNote.push(id)
    }
  }

}
