import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/people-list.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit{
  peopleList !: Person[];
  numPage :number = 1;
  numPeople : number = 0;

  constructor(private peopleService : PeopleService){}
  ngOnInit(): void {
      this.loadNewPage();
  }
  loadNewPage(){
    this.peopleService.getPeopleList(this.numPage).subscribe(resp => {
      this.peopleList = resp.results;
      this.numPeople  = resp.total_results;
    });
  }
  loadPageByName(event: any){
    let name = event.target.value;
    if(name == ''){
      this.loadNewPage();
    }else{
      this.peopleService.getPersonByName(name, this.numPage).subscribe(resp => {
        this.peopleList = resp.results;
        this.numPeople  = resp.total_results;
      });
    }
  }
}
