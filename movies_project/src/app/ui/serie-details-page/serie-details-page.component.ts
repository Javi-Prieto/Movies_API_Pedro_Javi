import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SerieDetailResponse } from 'src/app/models/serie-details.interface';
import { SerieService } from 'src/app/services/serie.service';
import { environment } from 'src/environments/environment.development';
import { Season } from 'src/app/models/serie-details.interface';
import { Review, ReviewResponse } from 'src/app/models/review-list.interface';


@Component({
  selector: 'app-serie-details-page',
  templateUrl: './serie-details-page.component.html',
  styleUrls: ['./serie-details-page.component.css']
})
export class SerieDetailsPageComponent implements OnInit {

  serie !: SerieDetailResponse;
  serieId !: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  backgroundImg!: string;
  temporadas: Season[] = [];
  coments!: Review [];
  

  constructor(private serieService: SerieService, private sanitize: DomSanitizer) {
    this.serieId = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.serieService.getSerieDetails(this.serieId).subscribe(resp => {
      this.serie = resp;      
      this.temporadas = this.serie.seasons;
      this.backgroundImg = `url(${environment.imageBackgroundBaseUrl}${this.serie.backdrop_path})`;
      console.log(this.backgroundImg);
    })
    this.serieService.getComents(this.serieId).subscribe(resp => {
      this.coments = resp.results;
      console.log(this.coments);      
    })
  }

  setBackgound(): string {
    return `${environment.posterImageBaseUrl}${this.serie.poster_path}`;
  }

  getTemporadaPoster(temporada: Season): string {
    return `${environment.posterImageBaseUrl}${temporada.poster_path}`;
  }
}
