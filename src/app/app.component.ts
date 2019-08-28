import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  sideMenuOpened = false;
  sideMenuClosed = true;
  openSideMenu(isOpened: boolean) {
    console.log('in app component');
    this.sideMenuOpened = !this.sideMenuOpened;
  }

  closeSideMenu() {
    this.sideMenuOpened = !this.sideMenuOpened;
  }
}
