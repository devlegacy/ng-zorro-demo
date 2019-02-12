import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {

  }

  title = 'Ng Zorro Demo';

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  visible = false;
  placement = 'right';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
