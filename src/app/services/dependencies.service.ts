import { Injectable } from '@angular/core';
import { daysNames } from '../interfaces/days';
@Injectable({
  providedIn: 'root'
})
export class DependenciesService {
  constructor() { }
  getDaysNames(): string[] {
    return daysNames;
  }
}
