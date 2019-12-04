import { Restaurant } from './../interfaces/restaurant';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(rests: Restaurant[], searchText: string): any {
    if (rests){
      return rests.filter((rest) => rest.name.toLowerCase().startsWith(searchText.toLowerCase()));}
    return [];
  }

}
