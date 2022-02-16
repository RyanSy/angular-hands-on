import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/interfaces/IPerson';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {

  persons:IPerson[] = [
    {
      name: 'ryan',
      background: 'rutgers u.',
      factoid: 'was a dj for 20 years'
    }
  ];
  
  person:IPerson = {
    name: "",
    background: "",
    factoid: ""
  }

  getPersonFromNewPerson($event: any):void {
    console.log($event);
    
    this.person = $event;
    this.persons.push(this.person);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
