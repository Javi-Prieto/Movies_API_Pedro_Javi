import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  @Input() id!: number;
  @Input() type !: string;

  constructor(private accService: AccountService){}

  addToWatchList(){
    this.accService.addToWatchList(this.type, this.id, true).subscribe(answ => 
        {
          window.location.href ='http://localhost:4200/movies/';
        }
      );
  }
}
