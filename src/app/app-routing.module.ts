import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { SearchComponent }      from './search/search.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ReviewsAllComponent } from './reviews-all/reviews-all.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'reviews', component: ReviewsAllComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}