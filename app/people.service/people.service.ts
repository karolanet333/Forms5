import {Injectable} from '@angular/core'
import {Person} from './person'

const PEOPLE: Person[] = [
    new Person(1, "Persona 1"),
    new Person(2, "Persona 2"),
    new Person(3, "Persona 3")
];

@Injectable()
export class PeopleService{

    getAll() : Person[] {
        return PEOPLE.map(p => this.clone(p));
    }

    get(id: number) : Person {
        return this.clone(PEOPLE.find(p => p.id === id));
    }
    
    save(person: Person){
        let originalPerson = PEOPLE.find(p => p.id === person.id);
        if (originalPerson) Object.assign(originalPerson, person);
        // saved muahahaha
    }

    private clone(object: any){
        // hack
        return JSON.parse(JSON.stringify(object));
    }
}