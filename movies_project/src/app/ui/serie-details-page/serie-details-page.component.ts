import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SerieDetailResponse } from 'src/app/models/serie-details.interface';
import { SerieService } from 'src/app/services/serie.service';
import { environment } from 'src/environments/environment.development';
import { Season } from 'src/app/models/serie-details.interface';


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

  constructor(private serieService: SerieService, private sanitize: DomSanitizer){
    this.serieId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.serieService.getSerieDetails(this.serieId).subscribe(resp =>{
      this.serie = resp;
      this.temporadas = this.serie.seasons;     
    })
  }

  setBackgound():string{
    return `${environment.posterImageBaseUrl}${this.serie.poster_path}`;
  }

  getTemporadaPoster(temporada: Season): string{    
    return `${environment.posterImageBaseUrl}${temporada.poster_path}`;    
  }
}
