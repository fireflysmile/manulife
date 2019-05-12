import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
      year: 2011,
      rotation: 'RT 1',
      rotation_status: 'active',
      manager: 'Mdo',
      note: 'Notes about participant’s experience in the role. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.',
    },
    {
      id: 'id2',
      year: 2011,
      rotation: 'RT 1',
      rotation_status: 'pending',
      manager: 'Mdo',
      note: 'Notes about participant’s experience in the role. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.',
    },
    {
      id: 'id3',
      year: 2011,
      rotation: 'RT 1',
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


  yearOptions = [
    {
      value: 2011,
      label: "2011"
    },
    {
      value: 2012,
      label: "2012"
    },
    {
      value: 2013,
      label: "2013"
    }
  ];

  roationOptions = [
    {
      value: "RT 1",
      label: "RT 1"
    },
    {
      value: "RT 2",
      label: "RT 2"
    },
    {
      value: "RT 3",
      label: "RT 3"
    },
  ]

  editMode = false;

  @Input() participant: object;
  @Output() forceClose = new EventEmitter();
  @Output() showDeleteParticipantModal = new EventEmitter();
  @Output() showSaveModal = new EventEmitter();
  
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

  onClickEdit() {
    this.editMode = true;
  }

  onClickDelete() {
    this.showDeleteParticipantModal.emit()
  }

  onClickCancel() {
    this.editMode = false;
  }

  onClickSave() {
    this.editMode = false;
    this.showSaveModal.emit();
  }

  getRotationHistoryById(id) {
    return this.rotationsHistory.find(item => item.id === id)
  }

  getSelected = id => key => {
    const value = this.getRotationHistoryById(id)[key]
    return {
      value,
      label: value,
    }
  }

  onChangeSelect = id => key => ({ selected }) => {
    this.rotationsHistory = this.rotationsHistory.map(item => {
        return {
          ...item,
          [key]: item.id === id ? selected.value : item[key]
        }
    })
  }
}
