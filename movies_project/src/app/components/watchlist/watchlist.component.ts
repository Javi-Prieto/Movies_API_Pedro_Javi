import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  @Input() id!: number;
  @Input() type !: string;

  isOnWatchList!:boolean;

  constructor(private accService: AccountService){}

  ngOnInit(): void {
    this.accService.getMoviesWatchList().subscribe(answ => {
      console.log(answ.results);
      this.isOnWatchList = answ.results.map(m => m.id).includes(this.id);
      console.log(this.isOnWatchList);
    });
}

  addToWatchList(){
    this.accService.addToWatchList(this.type, this.id, true).subscribe(answ => 
        {
          window.location.href ='http://localhost:4200/movies/';
        }
      );
  }
}
