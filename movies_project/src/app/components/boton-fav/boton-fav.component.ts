import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-boton-fav',
  templateUrl: './boton-fav.component.html',
  styleUrls: ['./boton-fav.component.css']
})
export class BotonFavComponent {

  @Input() type!: String;
  @Input() id!: number;
  isPresent!: boolean;

  constructor(private acountService: AccountService) { }

  ngOnInit(): void {
    this.acountService.getFavSerie().subscribe(resp => {
      this.isPresent = resp.results.map(s => s.id).includes(this.id);
    })
  }

  agregar() {
    this.acountService.addFavorite(this.type, this.id, true).subscribe(answ => {
      if (this.type === 'tv') {
        window.location.href = `http://localhost:4200/series/${this.id}`;
      } else if (this.type === 'tv') {
        window.location.reload();
      }
    })
  }

}

