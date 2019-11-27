import { Dish } from './dish';
export interface Restaurant {
    name: string;
    chef: string;
    creation_date: Date;
    image: string;
    popularity: number;
    dishes: Dish[];
    opening_hours: Date[][];
}
