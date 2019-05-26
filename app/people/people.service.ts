import { Person } from './models/person.model';

export class PeopleService {
  people: Array<Person> = [
    new Person('Neo', 24),
    new Person('Trinity', 25),
    new Person('Morpheus', 30)
  ];

  getPeople(): Array<Person> { return this.people.slice(); }
}