import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { Subject, Subscription } from 'rxjs';
import { Restaurant } from '../../services/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';
import { RestaurantsEditFormComponent } from '../restaurants-edit-form/restaurants-edit-form.component';
import 'datatables.net';

@Component({
  selector: 'app-restaurants-table',
  templateUrl: './restaurants-table.component.html',
  styleUrls: ['./restaurants-table.component.scss']
})
export class RestaurantsTableComponent implements OnInit {
  restaurants: Restaurant[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // restaurants$: Observable<Restaurant[]>;
  params$: Subscription;
  loading = false;
  options: AnimationOptions = {
    path: '/assets/run-hamster-run.json'
  };

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestaurantsService, public dialog: MatDialog) {
    this.params$ = route.queryParamMap.subscribe(paramaters => {
      const parName: string = paramaters.get('name');
      const parChef: string = paramaters.get('chef');
      if (parName !== null && parChef !== null) {
        this.loading = true;
        setTimeout(() => {
          const dialogRef = this.dialog.open(RestaurantsEditFormComponent, { data: { name: parName, chef: parChef } });
          this.loading = false;
          dialogRef.afterClosed().subscribe(() => {
            this.restService.getAllRestaurants().subscribe(array => this.restaurants = array);
            this.router.navigate(['.'], { relativeTo: this.route });
          });
        }, 2000);
      } else {
        // should automatically go to 404
        this.router.navigate(['.'], { relativeTo: this.route });

      }

    });
  }

  onClick(rest: Restaurant) {
    if (!this.loading) {

      console.log('clicked');
      this.router.navigate([''], { queryParams: { name: rest.name, chef: rest.chef } });
    }
  }
  ngOnInit() {
    // this.restaurants$ = this.restService.getAllRestaurants();
    this.restService.getAllRestaurants().subscribe(array => this.restaurants = array);
  }
}
