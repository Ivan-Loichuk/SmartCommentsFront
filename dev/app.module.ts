import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {Http, HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import {ModalModule} from "ng2-modal"
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    }),
    ModalModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
}
