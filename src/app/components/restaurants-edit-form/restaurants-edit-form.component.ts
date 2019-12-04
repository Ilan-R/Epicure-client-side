import { Restaurant } from './../../interfaces/restaurant';
import ObjectID from 'bson-objectid';
import { Dish } from './../../interfaces/dish';
import { BusinessHours } from './../../interfaces/business_hours';
import { DependenciesService } from './../../services/dependencies.service';
import { RestaurantsService } from '../../services/restaurants.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-restaurants-edit-form',
  templateUrl: './restaurants-edit-form.component.html',
  styleUrls: ['./restaurants-edit-form.component.scss']
})
export class RestaurantsEditFormComponent implements OnInit {
  group: FormGroup;
  daysNames: string[];

  constructor(private depService: DependenciesService, private fb: FormBuilder,
    private restService: RestaurantsService, @Inject(MAT_DIALOG_DATA) public rest: Restaurant) { }

  ngOnInit(): void {
    this.daysNames = this.depService.getDaysNames();
    this.group = this.getGroup();
    //this.populateControls();
    this.group.get('name').setValue(this.rest ? this.rest.name : '');
    this.group.get('chef').setValue(this.rest ? this.rest.chef : '');

  }

  getGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      chef: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const toPost = this.rest._id === '' ? this.getNewRestaurant() : this.updateCurrentRestaurant();
    console.log(toPost);
    this.restService.addRestaurant(toPost).subscribe();
  }
  updateCurrentRestaurant(): Restaurant {
    return {
      _id: this.rest._id,
      name: this.group.get('name').value,
      chef: this.group.get('chef').value,
      creation_date: this.rest.creation_date,
      image: this.rest.image,
      popularity: this.rest.popularity,
      dishes: this.rest.dishes
    };
  }
  getNewRestaurant(): Restaurant {
    return {
      _id: new ObjectID().str,
      name: this.group.get('name').value,
      chef: this.group.get('chef').value,
      creation_date: new Date(),
      image: 'https://source.unsplash.com/random/800x600?sig='.concat(Math.random().toString()),
      popularity: this.calculatePopularity(),
      dishes: this.getDishes()
    };

  }
  calculatePopularity(): number {
    return Math.ceil(Math.random() * (5 - 0) + 0);
  }

  getBusinessHours(): BusinessHours[] {
    const array: BusinessHours[] = [];
    this.daysNames.forEach((name) => {
      const opening = this.group.get(name.concat('Opening')).value;
      const closing = this.group.get(name.concat('Closing')).value;
      console.log('opening: ', opening, 'closing: ', closing);
      if (!opening || !closing) {
        array.push({ hours: [] });
      } else {
        array.push({ hours: [opening, closing] });
      }
    });
    return array;
  }
  getDishes(): Dish[] {
    return [{
      name: 'Red Farm',
      image: 'https://source.unsplash.com/random/800x600?sig=1',
      ingredients: 'Tofu, Spekkoek\n Peanuts, Spicy\n Manis, Pear\n Yakitori',
      price: 98,
      meal_type: 1
    },
    {
      name: 'Pad Ki Mao',
      image: 'https://source.unsplash.com/random/800x600?sig=1',
      ingredients: 'Shrimps, Glass\n Noodles, Kemiri\n Nuts, Shallots,\n Lemon Grass,\n Magic Chili Brown Coconut',
      price: 88
    },
    {
      name: 'Pan Ki Tao',
      image: 'https://source.unsplash.com/random/800x600?sig=1',
      ingredients: 'Shrimps, Glass\n Noodles, Kemiri\n Nuts, Shallots,\n Lemon Grass,\n Magic Chili Brown Coconut',
      price: 78,
      meal_type: 1
    }
    ];
  }

  generateObjectID(): string {
    return '';
  }

  delete(): void {
    this.restService.removeRestaurant(this.rest._id).subscribe();
  }

}
