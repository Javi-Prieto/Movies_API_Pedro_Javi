import { Component, Input } from '@angular/core';
import { FavSeries } from 'src/app/models/get-fav-tv.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent {

  @Input() serie: boolean = false;
  serieList!: FavSeries[];

  numPage: number = 1;
  totalElements: number = 0;
  constructor(private acountService: AccountService) { }

  ngOnInit(): void {
    this.lodPage();
  }

  lodPage() {
    if (this.serie) {
      this.acountService.getFavSeriePage(this.numPage).subscribe(resp => {
        this.serieList = resp.results;
        this.totalElements = resp.total_results;
      })
    }
  }
}
