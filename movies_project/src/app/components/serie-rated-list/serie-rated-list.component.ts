import { Component, OnInit } from '@angular/core';
import { RatedSerie } from 'src/app/models/ratedSerie.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie-rated-list',
  templateUrl: './serie-rated-list.component.html',
  styleUrls: ['./serie-rated-list.component.css']
})
export class SerieRatedListComponent implements OnInit {

  ratedSerieList: RatedSerie[] = [];

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getRatedSerieList().subscribe(resp => {
      this.ratedSerieList = resp.results.slice(0, 10);
    })
  }

}
