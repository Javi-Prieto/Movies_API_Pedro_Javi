import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SerieItemComponent } from './components/serie-item/serie-item.component';
import { SerieListComponent } from './components/serie-list/serie-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleItemComponent } from './components/people-item/people-item.component';
import { RatingItemComponent } from './components/rating-item/rating-item.component';
import { FavouriteItemComponent } from './components/favourite-item/favourite-item.component';
import { MovieListPageComponent } from './ui/movie-list-page/movie-list-page.component';
import { SerieListPageComponent } from './ui/serie-list-page/serie-list-page.component';
import { PeopleListPageComponent } from './ui/people-list-page/people-list-page.component';
import { MovieDetailsPageComponent } from './ui/movie-details-page/movie-details-page.component';
import { SerieDetailsPageComponent } from './ui/serie-details-page/serie-details-page.component';
import { PeopleDetailsPageComponent } from './ui/people-details-page/people-details-page.component';
import { CollectionPageComponent } from './ui/collection-page/collection-page.component';
import { UserPageComponent } from './ui/user-page/user-page.component';
import { NotFoundPageComponent } from './ui/not-found-page/not-found-page.component';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';


import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieItemComponent,
    SerieItemComponent,
    SerieListComponent,
    MovieListComponent,
    PeopleListComponent,
    PeopleItemComponent,
    RatingItemComponent,
    FavouriteItemComponent,
    MovieListPageComponent,
    SerieListPageComponent,
    PeopleListPageComponent,
    MovieDetailsPageComponent,
    SerieDetailsPageComponent,
    PeopleDetailsPageComponent,
    CollectionPageComponent,
    UserPageComponent,
    NotFoundPageComponent,
    CollectionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      radius: 25,
      outerStrokeWidth: 10,
      innerStrokeWidth: 2,
      outerStrokeColor: "#5000B9",
      innerStrokeColor: "#111111",
      backgroundColor: "#000000",
      animationDuration: 300,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
