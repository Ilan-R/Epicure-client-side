import { AdminGuard } from './services/admin.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RestaurantsEditFormComponent } from './components/restaurants-edit-form/restaurants-edit-form.component';
import { RestaurantsTableComponent } from './components/restaurants-table/restaurants-table.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'main'},
{path: 'main', component: MainComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'table', component: RestaurantsTableComponent, canActivate: [AdminGuard]},
{path: 'edit', component: RestaurantsEditFormComponent},
{path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
