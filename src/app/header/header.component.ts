import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sideMenuOpened = false;
  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  openSideMenu() {
    this.sideMenuOpened = !this.sideMenuOpened;
    console.log('clicked');
    this.buttonClicked.emit(this.sideMenuOpened);
  }

}
