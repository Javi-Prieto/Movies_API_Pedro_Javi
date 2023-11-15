import { Component, OnInit } from '@angular/core';
import { UserDetailsResponse } from 'src/app/models/user-details.interface';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  user!: UserDetailsResponse; 
  constructor(private serviceAuth: AuthService,private serviceAcc:AccountService){}
  ngOnInit(): void {
    let user_id = localStorage.getItem('USER_ID');
    console.log(user_id);
    if(user_id!=null){
      this.serviceAcc.getAccountDetailsById(+user_id).subscribe(answ => {
        this.user = answ;
        console.log(this.user);
      });
    };
      
  }
  createRequestToken() {
    this.serviceAuth.getRequestToken().subscribe(answ => {
      localStorage.setItem('REQUEST_TOKEN', answ.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/succes`;
    });
  }
  isUserRegister():boolean{
    let user_id = localStorage.getItem('USER_ID');
    return user_id == null? true: false;
  }
}
