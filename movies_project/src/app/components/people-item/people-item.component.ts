import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/people-list.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent {
  @Input() person !: Person;
  setPeopleImg():string{
    return `${environment.actorImageBaseUrl}${this.person.profile_path}`;
  }
}
