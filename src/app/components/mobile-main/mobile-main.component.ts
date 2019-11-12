import { RestaurantsService } from '../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-main',
  templateUrl: './mobile-main.component.html',
  styleUrls: ['./mobile-main.component.scss']
})
export class MobileMainComponent implements OnInit {

  constructor(private restService: RestaurantsService) { }

  ngOnInit() {
    
  }

}
