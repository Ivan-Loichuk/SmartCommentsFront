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
import { AuthorizationComponent } from './modal-windows/authorization/authorization.component';
import { AddReviewComponent } from './modal-windows/add-review/add-review.component';
import { AdminComponent } from './admin/admin.component';
import { HeadComponent } from './admin/head/head.component';
import { TopNavComponent } from './admin/partial/top-nav/top-nav.component';
import { LeftNavComponent } from './admin/partial/left-nav/left-nav.component';
import { AccommodationListComponent } from './admin/accommodation-list/accommodation-list.component';
import { AddAccommodationComponent } from './modal-windows/add-accommodation/add-accommodation.component';

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
    ReviewsAllComponent,
    AuthorizationComponent,
    AddReviewComponent,
    AdminComponent,
    HeadComponent,
    TopNavComponent,
    LeftNavComponent,
    AccommodationListComponent,
    AddAccommodationComponent
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
