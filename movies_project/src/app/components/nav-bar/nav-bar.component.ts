import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  constructor(private serviceAuth: AuthService){}

  createRequestToken() {
    this.serviceAuth.getRequestToken().subscribe(answ => {
      localStorage.setItem('REQUEST_TOKEN', answ.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/succes`;
    });
  }

}
