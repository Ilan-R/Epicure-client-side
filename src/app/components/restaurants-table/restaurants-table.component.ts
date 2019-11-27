import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { Subject, Subscription } from 'rxjs';
import { Restaurant } from '../../interfaces/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';
import { RestaurantsEditFormComponent } from '../restaurants-edit-form/restaurants-edit-form.component';
import 'datatables.net';

@Component({
  selector: 'app-restaurants-table',
  templateUrl: './restaurants-table.component.html',
  styleUrls: ['./restaurants-table.component.scss']
})
export class RestaurantsTableComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // restaurants$: Observable<Restaurant[]>;
  params$: Subscription;
  loading = false;
  options: AnimationOptions = {
    path: '/assets/run-hamster-run.json'
  };

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestaurantsService, public dialog: MatDialog) { }

  onClick(rest: Restaurant) {
    if (!this.loading) {
      console.log('clicked');
      this.router.navigate(['table'], { queryParams: { name: rest.name, chef: rest.chef } });
    }
  }
  tableInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.restService.getAllRestaurants().subscribe(array => {
      console.log('array: ', array)
      this.restaurants = array;
      this.dtTrigger.next();
    },
      err => console.log(err));
  }
  ngOnInit() {
    this.tableInit();
    this.params$ = this.route.queryParamMap.subscribe(paramaters => {
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
        }, 1000);
      } else {
        // should automatically go to 404
        this.router.navigate(['.'], { relativeTo: this.route });

      }

    });
  }
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
}
