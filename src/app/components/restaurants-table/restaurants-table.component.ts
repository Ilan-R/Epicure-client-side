import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { Subject, Subscription } from 'rxjs';
import { Restaurant } from '../../interfaces/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';
import { RestaurantsEditFormComponent } from '../restaurants-edit-form/restaurants-edit-form.component';
import 'datatables.net';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private metaService: Meta, private titleService: Title, private route: ActivatedRoute, private router: Router,
              private restService: RestaurantsService, public dialog: MatDialog) { }
// TODO: check after ssr cahnges!!
  onClick(nameI: string, chefI: string) {
    if (!this.loading) {
      console.log('clicked');
      this.router.navigate(['table'], { queryParams: { name: nameI, chef: chefI } });
    }
  }
  tableInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.restService.getAllRestaurants().subscribe(array => {
      console.log('array: ', array);
      this.restaurants = array;
      this.dtTrigger.next();
    },
      err => console.log(err));
  }
  ngOnInit() {
    this.titleService.setTitle('Admin, edit away');
    this.metaService.addTags([
      { name: 'description', content: 'Edit, add and remove restaurants as you please' },
      { name: 'og:image', content: 'https://source.unsplash.com/random/800x600' }
    ]);
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
