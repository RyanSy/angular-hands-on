import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {
  //To send data from the new course component to the course page we
  //need to use @Output and create a new event emitter
  @Output() sendPerson = new EventEmitter();

  //We need to declare the variables we want to store the user data into
  name:String="";
  background:String="";
  factoid:String="";

  onSubmit(): void {
    console.log("called:", this.name, this.background, this.factoid);

    const person = {
      name: this.name,
      background: this.background,
      factoid: this.factoid
    }

    this.sendPerson.emit(person);

    this.name = "";
    this.background = "";
    this.factoid = "";

  }

  constructor() { }

  ngOnInit(): void {
  }

}
