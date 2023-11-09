import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { SerieListComponent } from './components/serie-list/serie-list.component';
import { SerieListPageComponent } from './ui/serie-list-page/serie-list-page.component';
import { SerieDetailsPageComponent } from './ui/serie-details-page/serie-details-page.component';
import { NotFoundPageComponent } from './ui/not-found-page/not-found-page.component';
import { MovieListPageComponent } from './ui/movie-list-page/movie-list-page.component';
import { MovieDetailsPageComponent } from './ui/movie-details-page/movie-details-page.component';
import { PeopleDetailsPageComponent } from './ui/people-details-page/people-details-page.component';
import { PeopleListPageComponent } from './ui/people-list-page/people-list-page.component';
import { UserPageComponent } from './ui/user-page/user-page.component';
import { CollectionPageComponent } from './ui/collection-page/collection-page.component';

const routes: Routes = [
  
  {path:"series", component:SerieListPageComponent},
  {path:"series/:id", component:SerieDetailsPageComponent},
  {path:"movies", component:MovieListPageComponent},
  {path:"movies/:id", component:MovieDetailsPageComponent},
  {path:"people", component:PeopleListPageComponent},
  {path:"people/:id", component:PeopleDetailsPageComponent},
  {path:"user/:id", component:UserPageComponent},
  {path:"collection/:id", component:CollectionPageComponent},
  {path:"", pathMatch:"full",component:HomePageComponent},
  {path: '**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
