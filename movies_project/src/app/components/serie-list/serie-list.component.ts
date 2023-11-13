import { Component, OnInit } from '@angular/core';
import { PopularList } from 'src/app/models/serie-list.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  serieList!: PopularList[];

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getPopularFilmList().subscribe(resp => {
      this.serieList = resp.results;
    })
  }

}
