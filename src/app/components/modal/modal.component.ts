import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() afterCloseModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
    $('#myModal').on('hidden.bs.modal', () => {
      this.isOpen = false;
      this.afterCloseModal.emit()
    })
  }

  showModal() {
    $("#myModal").modal("show")
  }

  ngOnChanges(changes) {
    if (changes.isOpen.currentValue && changes.isOpen.currentValue !== changes.isOpen.previousValue) {
      console.log('ngOnChanges', changes)
      this.showModal()
    }
  }
}
