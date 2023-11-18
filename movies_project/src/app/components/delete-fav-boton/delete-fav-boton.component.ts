import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-delete-fav-boton',
  templateUrl: './delete-fav-boton.component.html',
  styleUrls: ['./delete-fav-boton.component.css']
})
export class DeleteFavBotonComponent {

  @Input() id!: number;
  @Input() type!: string;

  constructor(private accountServie: AccountService) { }

  deleteFromFav() {
    this.accountServie.addFavorite(this.type, this.id, false).subscribe(() => {
      window.location.reload();
    })
  }
}
