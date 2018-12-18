import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
