import { Component, OnInit } from '@angular/core';
import { UserDetailsResponse } from 'src/app/models/user-details.interface';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{
  userAcc!: UserDetailsResponse;
  
  constructor(private accService: AccountService){}

  ngOnInit(): void {
      this.accService.getAccountDetailsById().subscribe(answ => {
        this.userAcc = answ;
        console.log(this.userAcc)
      });
  }

  getUserAvatar():string{
    if(this.userAcc.avatar.tmdb.avatar_path == null)
      return "https://freeiconshop.com/wp-content/uploads/edd/person-flat.png";
    return `${environment.actorImageBaseUrl}${this.userAcc.avatar.tmdb.avatar_path}`;
  }
}
