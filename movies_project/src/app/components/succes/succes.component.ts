import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.css']
})
export class SuccesComponent implements OnInit{
  constructor(private serviceAuth: AuthService, private serviceAcc: AccountService){}
  ngOnInit(): void {
      let token = localStorage.getItem('REQUEST_TOKEN');
      this.serviceAuth.createSession(token!).subscribe(answ => {
        
        localStorage.setItem('SESSION_ID', answ.session_id);
        
        this.serviceAcc.getAccountDetailsBySession().subscribe(answ => {
          localStorage.setItem('USER_ID', answ.id.toString());
          window.location.href = 'http://localhost:4200/';
        });
      });
  }
}
