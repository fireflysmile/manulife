import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  uniqueId: string;

  @Input() modalClassName: string;
  @Input() isOpen: boolean;
  @Output() afterCloseModal = new EventEmitter();

  constructor() {
    this.uniqueId = Math.random().toString(16).slice(2);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    $(`#${this.uniqueId}`).on('hidden.bs.modal', () => {
      this.isOpen = false;
      this.afterCloseModal.emit()
    })
  }

  showModal() {
    $(`#${this.uniqueId}`).modal("show")
  }

  ngOnChanges(changes) {
    if (changes.isOpen.currentValue && changes.isOpen.currentValue !== changes.isOpen.previousValue) {
      this.showModal()
    }
  }
}
