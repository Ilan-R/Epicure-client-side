import { Dish } from './../../interfaces/dish';
import { RestaurantsService } from '../../services/restaurants.service';
import { Restaurant } from '../../interfaces/restaurant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() mode: boolean;
  restaurants: Restaurant[] = [];
  dishes: Dish[] = [];
  SlideOptions = {
    nav: false, dots: false, autoWidth: true,
    responsive: {
      0: {
        center: false, items: 2, margin: 14
      },
      960: {
         center: false, items: 3, margin: 10
      }
    }
  };

  constructor(private restService: RestaurantsService) {
  }

  ngOnInit() {
    this.restService.getAllRestaurants().subscribe(rest => {
      this.mode ? this.restaurants = rest : this.dishes = rest[0].dishes;
    });
  }

  onclick() {
  }
}


