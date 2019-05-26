import { Component, OnInit } from '@angular/core';

import { Person } from './people/models/person.model';
import { PeopleService } from './people/people.service';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  protected people: Array<Person>;
  protected people2: Array<Person>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
    this.people2 = cloneDeep(this.people);
    this.people2[0].name = 'Wayne';
  }
}
