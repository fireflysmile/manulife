import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input('value') selected: string;
  @Input() dropdownClassName: string = '';
  @Input() dropdownCaretClassName: string = '';
  @Input() options: Array<any>;
  @Input() variant = '';
  @Output() onValueChange = new EventEmitter();

  isShowDropdown = false;

  constructor() { }

  ngOnInit() {}

  get transparent() {
    return this.variant.split(',').map(val => val.trim()).includes('transparent');
  }

  get light() {
    return this.variant.split(',').map(val => val.trim()).includes('light');
  }

  get gainsboro() {
    return this.variant.split(',').map(val => val.trim()).includes('gainsboro');
  }

  toggleDropdown() {
    $('#dropdownMenuButton').toggle('dropdown');
  }

  handleSelectOption(selected) {
    this.onValueChange.emit({ selected });
  }
}
