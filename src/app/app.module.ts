import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './search/filters/filters.component';
import { ResultsComponent } from './search/results/results.component';
import { RatingStarsComponent } from './common/rating-stars/rating-stars.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { BreadcrumbsComponent } from './common/breadcrumbs/breadcrumbs.component';
import { ReviewsComponent } from './accommodation/reviews/reviews.component';
import { RatingSummaryComponent } from './accommodation/rating-summary/rating-summary.component';
import { ReviewsAllComponent } from './reviews-all/reviews-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    FiltersComponent,
    ResultsComponent,
    RatingStarsComponent,
    PaginationComponent,
    AccommodationComponent,
    BreadcrumbsComponent,
    ReviewsComponent,
    RatingSummaryComponent,
    ReviewsAllComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
