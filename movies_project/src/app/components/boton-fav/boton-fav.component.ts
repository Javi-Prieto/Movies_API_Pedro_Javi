import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/AccountService';

@Component({
  selector: 'app-boton-fav',
  templateUrl: './boton-fav.component.html',
  styleUrls: ['./boton-fav.component.css']
})
export class BotonFavComponent {

  @Input() type!: String;
  @Input() id!: number;
  @Input() favourite!: boolean;

  constructor(private acountService: AccountService) { }

  agregar(): void {
    this.acountService.addFavorite(this.type, this.id, this.favourite);
  }

}

