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
  numPage = 1;
  numSeries = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.loadNewPage();

  }

  loadNewPage() {
    this.serieService.getPopularFilmList(this.numPage).subscribe(resp => {
      this.serieList = resp.results;
      this.numSeries = resp.total_results;
    });
  }

  loadPageByName(event: any) {
    let name: string = event.target.value;
    if (name == '') {
      this.loadNewPage();
    } else {
      this.serieService.getSerieByName(event.target.value, this.numPage).subscribe(resp => {
        this.serieList = resp.results;
        this.numSeries = resp.total_results;
      })
    }
  }
}
