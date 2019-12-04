import { RestaurantsService } from './../../services/restaurants.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  prefix: string;
  restaurants$: Observable<Restaurant[]>;
  constructor(private fb: FormBuilder, private restService: RestaurantsService) { }

  ngOnInit() {
    this.prefix = '';
    this.restaurants$ = this.restService.getAllRestaurants();
    this.searchForm = this.fb.group({searchField: ['']});
    this.searchForm.get('searchField').valueChanges.subscribe(text => this.prefix = text);

  }
onSubmit(){

}

}
