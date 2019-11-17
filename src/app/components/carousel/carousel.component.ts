import {RestaurantsService} from '../../services/restaurants.service';
import {Restaurant} from '../../services/restaurant';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  restaurants: Restaurant[] = [];
  SlideOptions = {center: false, items: 2, loop: false, dots: false, autoWidth: true};

  constructor(private restService: RestaurantsService) {
  }

  ngOnInit() {
    this.restService.getAllRestaurants().subscribe(rest => {
      this.restaurants = rest;
    });
  }

  onclick() {
  }
}


