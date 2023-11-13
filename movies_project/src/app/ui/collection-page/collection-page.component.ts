import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionDetailsResponse, Part } from 'src/app/models/collection-details.interface';
import { CollectionService } from 'src/app/services/collection.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit{
  collectionSelected !: CollectionDetailsResponse;
  route: ActivatedRoute = inject(ActivatedRoute);
  collectionId: number = 0;
  bgImg: string = '';
  constructor(private collectionService: CollectionService){
    this.collectionId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
      this.collectionService.getCollectionDetails(this.collectionId).subscribe(ans => {
        this.collectionSelected = ans;
        this.bgImg = `url(${environment.imageBackgroundBaseUrl}${this.collectionSelected.backdrop_path})`;
      });
  }
  setBgImg(path:string):string{
    return `${environment.imageBackgroundBaseUrl}${path}`;
  }
  getCollectionAverageRating(movies: Part[]):number{
    let average:number= 0;
    movies.forEach(m => average += m.vote_average);
    average /= movies.length;
    return average;
  }
}
