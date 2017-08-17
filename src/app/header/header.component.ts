import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() arg = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onMenuClick(arg: string) {
    this.arg.emit(arg);
  }

}
