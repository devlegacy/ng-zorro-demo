import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Output() changeCollapsed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  collapsing($e: Event) {
    console.log($e);
    console.log(this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
    this.changeCollapsed.emit(this.isCollapsed);
  }
}
