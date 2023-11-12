import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleDetailResponse } from 'src/app/models/people-details.interface';
import { Cast } from 'src/app/models/person-movie.interface';
import { PeopleService } from 'src/app/services/people.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-people-details-page',
  templateUrl: './people-details-page.component.html',
  styleUrls: ['./people-details-page.component.css']
})
export class PeopleDetailsPageComponent implements OnInit{

  person : PeopleDetailResponse | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  artistId: number = 0;
  movies!: Cast[];
  bgImage !:string;
  constructor(private personService: PeopleService){
    this.artistId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
      this.personService.getPersonDetails(this.artistId).subscribe(answ => this.person = answ);
      this.personService.getMoviesFromPerson(this.artistId).subscribe(answ => {
        this.movies = answ.cast;
        this.bgImage = `url(${environment.posterImageBaseUrl}${this.movies.sort((a, b) => b.popularity-a.popularity)[0].poster_path})`;
      });
  }
  setFaceImgUrl():string {
    return `${environment.actorImageBaseUrl}${this.person?.profile_path}`;
  }
  setPosterImgUrl(path: string):string{
    return `${environment.posterImageBaseUrl}${path}`;
  }
  setGender():string{
    return this.person?.gender == 1? "Female" : "Male";
  }
}
