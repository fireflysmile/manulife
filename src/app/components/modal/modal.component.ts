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
    $(`#${this.uniqueId}`).on('hidden.bs.modal', (e) => {
      e.stopPropagation();
      console.log(e.target, `#${this.uniqueId}`, e.target.id)
      this.isOpen = false;
      this.afterCloseModal.emit();
      console.log('this.afterCloseModal.emit()')
    });

    if (this.isOpen) {
      this.showModal();
    }
  }

  showModal() {
    $(`#${this.uniqueId}`).modal("show")
  }

  closeModal() {
    $(`#${this.uniqueId}`).modal("hide")
  }

  ngOnChanges(changes) {
    if (changes.isOpen.currentValue && changes.isOpen.currentValue !== changes.isOpen.previousValue) {
      this.showModal()
    }

    if (!changes.isOpen.currentValue && changes.isOpen.currentValue !== changes.isOpen.previousValue) {
      this.closeModal()
    }
  }
}
