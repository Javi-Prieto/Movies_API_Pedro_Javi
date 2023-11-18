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
import { MovieRatedListComponent } from './components/movie-rated-list/movie-rated-list.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PopularMovieItemComponent } from './components/popular-movie-item/popular-movie-item.component';
import { MoviePlayNowListComponent } from './components/movie-play-now-list/movie-play-now-list.component';
import { MoviePlayNowItemComponent } from './components/movie-play-now-item/movie-play-now-item.component';
import { TemporadasItemComponent } from './components/temporadas-item/temporadas-item.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { SuccesComponent } from './components/succes/succes.component';

import { BotonFavComponent } from './components/boton-fav/boton-fav.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { WatchlistListComponent } from './components/watchlist-list/watchlist-list.component';
import { WatchlistMovieItemComponent } from './components/watchlist-movie-item/watchlist-movie-item.component';
import { WatchlistDeleteButtonComponent } from './components/watchlist-delete-button/watchlist-delete-button.component';
import { AccountService } from './services/account.service';
import { WatchlistSerieItemComponent } from './components/watchlist-serie-item/watchlist-serie-item.component';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { FavLisSerieItemComponent } from './components/fav-lis-serie-item/fav-lis-serie-item.component';

import { FavListMovieItemComponent } from './components/fav-list-movie-item/fav-list-movie-item.component';
import { DeleteFavBotonComponent } from './components/delete-fav-boton/delete-fav-boton.component';

import { ValorationItemComponent } from './components/valoration-item/valoration-item.component';


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
    NotFoundPageComponent,
    CollectionItemComponent,
    MovieRatedListComponent,
    HomePageComponent,
    PopularMovieItemComponent,
    MoviePlayNowListComponent,
    MoviePlayNowItemComponent,
    TemporadasItemComponent,
    ReviewItemComponent,
    SuccesComponent,
    BotonFavComponent,
    WatchlistComponent,
    WatchlistComponent,
    WatchlistListComponent,
    WatchlistMovieItemComponent,
    WatchlistDeleteButtonComponent,
    UserPageComponent,
    WatchlistSerieItemComponent,
    FavListComponent,
    FavLisSerieItemComponent,

    FavListMovieItemComponent,
    DeleteFavBotonComponent,

    ValorationItemComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
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