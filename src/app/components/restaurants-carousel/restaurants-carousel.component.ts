import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-carousel',
  templateUrl: './restaurants-carousel.component.html',
  styleUrls: ['./restaurants-carousel.component.scss']
})
export class RestaurantsCarouselComponent implements OnInit {
  filterMode: string;
  reload = true;
  constructor() { }
  all() {
    this.filterMode = 'all';
    this.doReload();
  }
  popularity() {
    this.filterMode = 'popularity';
    this.doReload();
  }
  chef() {
    this.filterMode = 'chefSort';
    this.doReload();
  }
  name() {
    this.filterMode = 'nameSort';
    this.doReload();
  }
  ngOnInit() {
    this.filterMode = 'all';
    this.doReload();
  }
  doReload() {
    setTimeout(() => this.reload = false);
    setTimeout(() => this.reload = true);
  }
}
