import { Dish } from './../../interfaces/dish';
import { Restaurant } from '../../interfaces/restaurant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;
  @Input() mode: boolean;
  constructor() { }

  ngOnInit() {
  }

  getDisplay(): string {
    return this.mode ? this.restaurant.chef : ((this.restaurant as unknown) as Dish).ingredients;
  }
}
