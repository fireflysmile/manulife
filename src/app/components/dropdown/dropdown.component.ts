import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare const $;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input('value') selected: string;
  @Input() dropdownClassName: string;
  @Input() options: Array<any>;
  @Input() transparent = false;
  @Input() light = false;
  @Output() onValueChange = new EventEmitter();

  isShowDropdown = false;

  constructor() { }

  ngOnInit() {}

  toggleDropdown() {
    $('#dropdownMenuButton').toggle('dropdown');
  }

  handleSelectOption(selected) {
    this.onValueChange.emit({ selected });
  }
}
