import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { MovieService } from 'src/app/services/movie.service';
import { SerieService } from 'src/app/services/serie.service';
@Component({
  selector: 'app-valoration-item',
  templateUrl: './valoration-item.component.html',
  styleUrls: ['./valoration-item.component.css']
})
export class ValorationItemComponent implements OnInit {
  value:number = 0;
  @Input() isAMovie: boolean = false;
  @Input() id: number = 0;
  readonly:boolean = false;

  constructor(private movieService: MovieService, private serieService: SerieService, private accountService: AccountService){}

  ngOnInit(): void {
      if(this.isAMovie){
        this.accountService.getRatedMovies().subscribe(answ => {
          if(answ.results.find(m => m.id == this.id)){
            this.value = answ.results.find(m => m.id == this.id)!.rating;
            this.readonly = true;
          }
        });
      }else{
        this.accountService.getRatedSeries().subscribe(ans => {
          if(ans.results.find(s => s.id == this.id)){
            this.value = ans.results.find(s => s.id == this.id)!.rating;
            this.readonly = true;
          }
        });
      }
  }
  onRateChange(){
    if(this.value != 0){
      this.readonly = true;
      if(this.isAMovie){
        this.movieService.addRating(this.id, this.value).subscribe();
      }else{
        this.serieService.addRating(this.id, this.value).subscribe();
      }

    }
  }
  deleteRate(){
    if(this.isAMovie){
      this.movieService.deleteRating(this.id).subscribe(() =>{
        this.readonly = false;
        this.value = 0;
      });
      
    }else{
      this.serieService.deleteRating(this.id).subscribe(() => {
        this.readonly = false;
        this.value = 0;
      });
    }
  }
}
