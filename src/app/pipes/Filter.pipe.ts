import { Restaurant } from '../interfaces/restaurant';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurants: Restaurant[], mode: string): any {
    switch (mode) {
      case 'popularity': {
        return restaurants.filter((rest) => rest.popularity >= 4);
      }
      case 'nameSort': {
        return restaurants.sort((a, b) => a.name.localeCompare(b.name));
      }
      case 'chefSort': {
        return restaurants.sort((a, b) => a.chef.localeCompare(b.chef));
      }
      case 'all': {
        return restaurants;
      }

    }
  }

}
