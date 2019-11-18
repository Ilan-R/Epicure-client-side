import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  navClick() {
    console.log('navclick');
  }

  centerClick() {
    console.log('centerclick');
  }

  searchClick() {
    console.log('searchclick');
  }

  userClick() {
    console.log('userclick');
  }

  menuClick() {
    console.log('menuclick');
  }
  ngOnInit() {
  }

}
