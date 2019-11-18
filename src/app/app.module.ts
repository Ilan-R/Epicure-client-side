import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,  MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { MobileSearchComponent } from './components/mobile-search/mobile-search.component';
import { MainComponent } from './components/main/main.component';
import { MobileSelectorComponent } from './components/mobile-selector/mobile-selector.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { RestaurantsCarouselComponent } from './components/restaurants-carousel/restaurants-carousel.component';
import { DishesCarouselComponent } from './components/dishes-carousel/dishes-carousel.component';
import { IconMeaningComponent } from './components/icon-meaning/icon-meaning.component';
import { WeeklyChefComponent } from './components/weekly-chef/weekly-chef.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantsTableComponent } from './components/restaurants-table/restaurants-table.component';
import { RestaurantsEditFormComponent } from './components/restaurants-edit-form/restaurants-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { DataTablesModule } from 'angular-datatables';
import player from 'lottie-web';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileSearchComponent,
    MainComponent,
    MobileSelectorComponent,
    CarouselComponent,
    RestaurantDetailComponent,
    RestaurantsCarouselComponent,
    DishesCarouselComponent,
    IconMeaningComponent,
    WeeklyChefComponent,
    AboutComponent,
    FooterComponent,
    RestaurantsTableComponent,
    RestaurantsEditFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    OwlModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    DataTablesModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
