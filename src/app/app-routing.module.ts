import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RestaurantsEditFormComponent } from './components/restaurants-edit-form/restaurants-edit-form.component';
import { RestaurantsTableComponent } from './components/restaurants-table/restaurants-table.component';
import { MobileMainComponent } from './components/mobile-main/mobile-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'mobile-main'},
{path: 'mobile-main', component: MobileMainComponent},
{path: 'table', component: RestaurantsTableComponent},
{path: 'edit', component: RestaurantsEditFormComponent},
{path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
