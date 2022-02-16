import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from 'src/app/interfaces/IPerson';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person:IPerson = {
    name: "",
    background: "",
    factoid: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
