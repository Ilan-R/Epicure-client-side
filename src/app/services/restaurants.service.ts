
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private baseUrl = 'http://localhost:3000/';
  private rests = 'restaurants/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}
  getRestaurantByName(name: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.baseUrl + this.rests + name);
  }
  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl + 'all');
  }
  addRestaurant(name: string, rest: Restaurant): Observable<Restaurant[]> {
    console.log('add ' + rest);
    return this.http.post<Restaurant[]>(this.baseUrl + this.rests + name, rest, this.httpOptions);
  }
  removeRestaurant(name: string): Observable<Restaurant[]> {
    return this.http.delete<Restaurant[]>(this.baseUrl + this.rests + name, this.httpOptions);
  }
}
