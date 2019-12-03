import { Observable } from 'rxjs';
import { User } from './../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000/api/';
  private config = { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' as 'json',
                     withCredentials: true, credentials: 'include'}//, observe: 'response' as 'body' };
  constructor(private http: HttpClient) {}
  register(usr: User): Observable<string> {
    return this.http.post<any>(this.url + 'register', usr, this.config);
  }
  login(possibleEmail: string, possiblePassword: string) {
    return this.http.post<any>(this.url + 'login', {email: possibleEmail, password: possiblePassword}, this.config);
  }
  isAdmin() {
    return this.http.get<any>(this.url + 'admin', { responseType: 'text' as 'json', withCredentials: true});
  }
}

