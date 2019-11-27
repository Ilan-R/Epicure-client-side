
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../interfaces/restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private baseUrl = 'http://localhost:3000/api/';
 // private baseUrl ='http://ec2-63-32-104-65.eu-west-1.compute.amazonaws.com/api/';
  private rests = 'restaurants/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}
  getRestaurantByName(name: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.baseUrl + this.rests + name);
  }
  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl + 'restaurants/all');
  }
  addRestaurant(name: string, rest: Restaurant): Observable<Restaurant[]> {
    console.log('add ' + rest);
    return this.http.post<Restaurant[]>(this.baseUrl + this.rests + name, rest, this.httpOptions);
  }
  removeRestaurant(name: string): Observable<Restaurant[]> {
    return this.http.delete<Restaurant[]>(this.baseUrl + this.rests + name, this.httpOptions);
  }
}
