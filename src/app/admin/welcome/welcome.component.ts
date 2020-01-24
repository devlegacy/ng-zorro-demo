import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  mediaQueryMobile: MediaQueryList;
  isCollapsed = false;
  topSideBarIsCollapsed = false;

  constructor(public mediaMatcher: MediaMatcher) { }

  ngOnInit() {
    this.mediaQueryMobile = this.mediaMatcher.matchMedia('(min-width: 769px)');

    this.mediaQueryMobile.addEventListener('change', (e) => this.mediaQueryMobileListener(e));
  }

  ngOnDestroy() {
    this.mediaQueryMobile.removeEventListener('change', (e) => this.mediaQueryMobileListener(e));
  }

  mediaQueryMobileListener(event) {
    console.log(event.matches ? 'match' : 'no match');
  }

  collapseSideBar() {
    console.log(this.mediaQueryMobile.matches);

    this.topSideBarIsCollapsed = this.mediaQueryMobile.matches ? !this.topSideBarIsCollapsed : true;

    this.isCollapsed = !this.isCollapsed;
  }

}
