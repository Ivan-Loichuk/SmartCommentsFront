import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { SearchComponent }      from './search/search.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ReviewsAllComponent } from './reviews-all/reviews-all.component';
import { AdminComponent } from './admin/admin.component';
import { AccommodationListComponent } from './admin/accommodation-list/accommodation-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'reviews', component: ReviewsAllComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/accommodation', component: AccommodationListComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}