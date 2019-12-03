// import ObjectID from 'bson-objectid';
import { Dish } from './dish';
import { BusinessHours } from './business_hours';
export interface Restaurant {
    // _id: ObjectID;
    _id: string;
    name: string;
    chef: string;
    creation_date: Date;
    image: string;
    popularity: number;
    dishes: Dish[];
   // opening_hours: BusinessHours[];
}
