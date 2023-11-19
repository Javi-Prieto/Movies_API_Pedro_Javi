import { Component, OnInit } from '@angular/core';
import { PopularList } from 'src/app/models/serie-list.interface';
import { SerieService } from 'src/app/services/serie.service';
import { Genre } from 'src/app/models/genres-serie.interface';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  serieList!: PopularList[];
  numPage = 1;
  numSeries = 0;
  genresList !: Genre[];
  genresChecked: string = '';
  genresCheck: boolean = false;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.loadNewPage();
    this.serieService.getSerieGenres().subscribe(resp => this.genresList = resp.genres);

  }

  loadNewPage() {
    this.serieService.getPopularSerieList(this.numPage).subscribe(resp => {
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

  loadPageByGender(event: any) {
    let check = event.currentTarget.checked;
    let value = event.currentTarget.value;
    if (check) {
      this.serieService.getPopularSerieList(this.numPage).subscribe(resp => {
        this.serieList = resp.results.filter(s => s.genre_ids.includes(+value));
      });
    } else {
      this.loadNewPage();
    }
  }
}
