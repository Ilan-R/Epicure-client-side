import { Restaurant } from '../../interfaces/restaurant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;
  constructor() { }

  ngOnInit() {
  }

}
