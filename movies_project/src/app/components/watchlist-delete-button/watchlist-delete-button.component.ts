import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-watchlist-delete-button',
  templateUrl: './watchlist-delete-button.component.html',
  styleUrls: ['./watchlist-delete-button.component.css']
})
export class WatchlistDeleteButtonComponent{
  @Input() id!: number;
  @Input() type !: string;

  constructor(private accService: AccountService){}

  

  deleteFromWatchList(){
    this.accService.addToWatchList(this.type, this.id, false).subscribe(() => 
        {
          window.location.href =`http://localhost:4200/user/${localStorage.getItem('USER_ID')}`;
        }
      );
  }
}
